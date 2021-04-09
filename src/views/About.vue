<template>
  <v-container>
    <v-tabs fixed-tabs v-model="value">
    <v-tab @click="$router.push('/auth/login')">Inicio de Sesion</v-tab>
    <v-tab @click="$router.push('/auth/registro')">Registro</v-tab>
    <v-tab-item>
      <router-view></router-view>
    </v-tab-item>
    <v-tab-item>
      <router-view></router-view>
    </v-tab-item>
    
  </v-tabs>
    <!-- <v-bottom-navigation  horizontal color="red" :value="value">
      <v-btn @click="$router.push('/auth/login')">
        <span>Login</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn @click="$router.push('/auth/registro')">
        <span>Registro</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
  created(){
    console.log(this.$route.path)
    switch(this.$route.path){
      case '/auth/registro':
        this.value = 1; break;
      case '/auth/login':
        this.value = 0; break;
    }
  }
};
</script>
