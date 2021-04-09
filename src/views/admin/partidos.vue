<template>
  <v-container fluid class="pt-8 d-flex flex-wrap justify-center">
    <v-card max-width="850" width="100%">
      <v-toolbar color="pink lighten-1" dark>
        <v-toolbar-title>Partidos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="$router.push('/admin/registrar/partido').catch(() => {})"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-subheader>Partidos nacionales</v-subheader>
        <template v-for="(partido, i) in partidos">
          <v-list-item :key="partido.code" @click="goToPartido">
            <v-list-item-avatar tile>
              <v-img
                :src="require('@/assets/partidos/' + partido.image)"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="partido.name" />
              <v-list-item-subtitle v-text="partido.code" />
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="i < partidos.length - 1" :key="i" inset></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import ApiFetcher from "@/api/apiFetch";
export default {
  data() {
    let partidos = [];
    const title = "title";
    const subtitle = "subtitle";
    return { title, subtitle, partidos };
  },
  async mounted() {
    let { ok, partido } = await ApiFetcher.getPartidos();
    console.log(ok, partido);
    if (ok) {
      this.partidos = partido;
    }
  },
  methods: {
    goToPartido() {},
  },
};
</script>
