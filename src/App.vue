<template>
  <v-app>
    <app-bar @click="$refs.nav.drawer = !$refs.nav.drawer" />
    <navigation ref="nav" />
    <app-loader ref="loader" />
    <v-main>
      <carrucel-anuncios/>
      <!-- <v-sheet width="100%" class="pa-5 pink white--text">
        <v-toolbar-title>Elecciones 2021 </v-toolbar-title>
        <v-card-text class="pink darken-2 mt-2">
          Inicia el Proceso Electoral para renovar la Cámara de Diputados y
          diversos cargos en los <b>32 estados del país</b>.
        </v-card-text>
      </v-sheet> -->
      <v-container fluid class="pa-0">
        <router-view @restartLoader="restartLoader" @stopLoader="stopLoader" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/layout/navigation";
import AppBar from "@/components/layout/appbar";
import AppLoader from "@/components/layout/loader";
import CarrucelAnuncios from "@/components/anuncios"

export default {
  data() {
    let stop_loader = setTimeout(() => {
      this.$refs.loader.stopLoader();
    }, 1500);
    return { stop_loader };
  },
  methods: {
    stopLoader() {
      this.$refs.loader.stopLoader();
    },
    restartLoader() {
      clearTimeout(this.stop_loader);
      this.stop_loader = null;
      this.$refs.loader.restartLoader();
    },
  },
  components: {
    Navigation,
    AppBar,
    AppLoader,
    CarrucelAnuncios
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
