<template>
     <div class="v-application--wrap">
      <v-app-bar color="#800000" app>
        <v-app-bar-nav-icon style="color:aliceblue" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title style="color:aliceblue">Leave Management</v-app-bar-title>
        <v-spacer />
        <div>
        <!-- <v-btn icon large text id="profileAvatar-id">
            <v-avatar size="36px">
                <v-icon v-if="globalStore.profilePicUrl===''"  x-large class="white--text">
                    mdi-account-circle
                </v-icon>
                <img v-else
                  :src="globalStore.profilePicUrl"
                  referrerpolicy="no-referrer"
                >
            </v-avatar>
        </v-btn> -->
        <profile-avatar/>
      </div>
      </v-app-bar>
      <v-navigation-drawer app
        v-model="drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> MSU GENSAN LOGO </v-list-item-title>
            <v-list-item-subtitle> Navigation drawers</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
            <div v-for="item in ConstRoutes" :key="item.path" link>


                <v-list-item v-if="!item.children" :to="item.path" ripple="ripple" class="mp-nav-item" active-class="mp-nav-item__active">
                    <v-list-item-icon class="layout-drawer__icon">
                        <v-icon>{{item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>
                            <span>{{item.meta.title }}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-group v-else class="mp-nav-item" prepend-icon='mdi-view-dashboard'>
                  <template v-slot:activator>
                    <v-list-item v-if="item.visible" :to="item.path" ripple="ripple" class="mp-nav-item" active-class="mp-nav-item__active">
                        <v-list-item-content>
                            <v-list-item-title>
                                <span>{{item.meta.title}}</span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </template>
                    
                    <div v-for="child in item.children" :key="child.path">
                        <v-list-item v-if="child.visible" :to="child.path" ripple="ripple" class="mp-nav-item" active-class="mp-nav-item__active">
                            <v-list-item-icon class="layout-drawer__icon">
                                <v-icon>{{child.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>
                                    <span>{{child.meta.title }}</span>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list-group>

            </div>            
        </v-list>
      </v-navigation-drawer>
     
    <v-main>
      <transition
        name="fade-transform"
        mode="out-in"
      >      
        <keep-alive>
          <slot />
        </keep-alive>
      </transition>
    </v-main>

    <v-footer
      app
      padless
      inset
      style="height:60px;"
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary text-center"
        style="height:60px;"
      >
        <v-card-text class="white--text" style="margin-top: -10px;">
          <!-- <v-icon color="white">mdi-cog </v-icon> -->
          <strong>Mindanao State Uniersity-Gensan</strong>
          <div>Information Communication and Technology Office </div>
        </v-card-text>
      </v-card>
    </v-footer>
     </div>
  </template>
  
  <script>
  import  {
    ConstRoutes
} from '@/router';
import {globalStore} from '@/main.js'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
  export default {
    name: 'App',
    components:{
      ProfileAvatar,
    },
    props:{
      routeList: {
            type: Array,
            default: () => ConstRoutes,
        },
    },
    data: () => ({
      globalStore,
      drawer:true,
      ConstRoutes,
    }),
  };
  </script>