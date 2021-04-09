<template>
  <v-app-bar app color="grey lighten-4" height="65" max-width="100vw">
    <v-app-bar-nav-icon @click="$emit('click')"></v-app-bar-nav-icon>
    <v-toolbar-title class="px-0">
      <v-avatar
        tile
        size="150"
        height="65"
        @click="$router.push('/').catch(() => {})"
      >
        <v-img src="@/assets/logo-ine.png" contain></v-img>
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/auth')" v-if="!isLogged">
      <v-icon small class="mr-2">mdi-account</v-icon>
      <label for="" class="caption">Iniciar Sesion</label>
    </v-btn>
    <v-sheet v-else class="transparent" dark>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="250"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="blue" size="35" v-bind="attrs" v-on="on">
            {{ username }}
          </v-avatar>
        </template>
        <v-sheet>
          <v-list>
            <v-list-item dense>
              <v-list-item-avatar size="35" color="blue white--text">
                {{ username }}
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ fullName }}</v-list-item-title>
                <v-list-item-subtitle>{{ codigo }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list dense class="overline">
            <!-- <v-list-item @click="$router.push().catch(() => {})">
              Perfil
            </v-list-item>
            <v-list-item @click="cerrarSesion"> configuracion </v-list-item> -->
            <v-list-item @click="endSesion"> cerrar sesion </v-list-item>
          </v-list>
        </v-sheet>
      </v-menu>
    </v-sheet>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    menu: null,
  }),
  methods: {
    ...mapActions(["cerrarSesion"]),
    endSesion(){
      this.cerrarSesion()
      this.$router.push({name: 'Index'})
    }
  },
  computed: {
    ...mapGetters(["isLogged", "username", "fullName", "codigo"]),
  },
};
</script>
