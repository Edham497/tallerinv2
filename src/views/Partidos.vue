<template>
  <v-container fluid class="pt-8 d-flex flex-wrap justify-center">
    <v-card flat>
      <v-card-title>Partidos que participaran el las elecciones del 2021</v-card-title>
    </v-card>
    <v-row justify="center">
      <Partido
        v-for="(partido, i) in partidos"
        :key="i"
        :image="partido.image"
        :title="partido.name"
        :codigo="partido.code"
        :color="partido.color"
        :dark="partido.dark"
        @click="goTo(partido._id)"
      />
    </v-row>
  </v-container>
</template>

<script>
import ApiFetcher from "@/api/apiFetch";
import Partido from "@/components/partido";
export default {
  data: () => ({
    partidos: [],
  }),
  components: {
    Partido,
  },
  async created() {
    this.$emit("restartLoader");
    let response = await ApiFetcher.getPartidos();
    if (response.ok) {
      this.partidos = response.partido.map((partido) => {
        console.log(partido);
        partido.image = require("@/assets/partidos/" + partido.image);
        return partido;
      });
    }
    setTimeout(() => {
      this.$emit("stopLoader");
    }, 250);
  },
  methods: {
    goTo(name) {
      this.$router.push("/partido/" + name);
    },
  },
};
</script>
