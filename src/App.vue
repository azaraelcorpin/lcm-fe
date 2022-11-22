<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import Layout from '@/views/layout/Layout.vue';
import  {
    routes
} from '@/router';
export default {
  name: 'App',
  components: {
    Layout,
  },
  computed: {
    layout() {
      return 'layout';
    },
  },

  data(){
    return {
      routes,
    }
  },
  mounted() {
        console.log(routes)
        // this.$http.get(`${process.env.VUE_APP_NAVIGATION_API}/navigation`)
        //   .then(({ data }) => {
        //     this.routes = data;
        //   });
    },
  
};
</script>
