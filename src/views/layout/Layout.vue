<template>
     <div class="v-application--wrap">
      <v-app-bar color="#800000" app>
        <v-app-bar-nav-icon style="color:aliceblue" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title style="color:aliceblue">Coding Beauty</v-app-bar-title>
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
            <div v-for="item in routes" :key="item.path" link>
                <v-list-item v-if="item.visible" :to="item.path" ripple="ripple" class="mp-nav-item" active-class="mp-nav-item__active">
                    <v-list-item-icon class="layout-drawer__icon">
                        <v-icon>{{item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>
                            <span>{{item.title }}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
        </v-list>
        <!-- <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
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
     </div>
  </template>
  
  <script>
  import  {
    routes
} from '@/router';
  export default {
    name: 'App',
    data: () => ({
      items: [
        // { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        // { title: 'Account', icon: 'mdi-account-box' },
        // { title: 'Settings', icon: 'mdi-cog' },
      ],
      drawer:true,
      routes,
    }),
  };
  </script>