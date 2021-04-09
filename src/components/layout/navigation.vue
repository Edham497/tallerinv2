<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet class="fill-height grey lighten-3">
      <v-list>
        <v-list-item @click="$router.push('/Home')" v-if="isLogged">
        <v-list-item-avatar>
          <v-icon>mdi-home</v-icon>
        </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/partidos')">
        <v-list-item-avatar>
          <v-icon>mdi-account-group</v-icon>
        </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Partidos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/candidatos')">
        <v-list-item-avatar>
          <v-icon>mdi-account-tie</v-icon>
        </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Candidatos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Urna Electronica</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return { drawer: null };
  },
  computed: {
    ...mapGetters(['isLogged'])
  }
};
</script>
