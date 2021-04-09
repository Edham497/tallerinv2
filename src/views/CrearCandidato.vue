<template>
  <v-row>
    <v-container class="d-flex flex-column justify-center align-center pa-10">
      <v-card width="100%" class="mx-10" max-width="500px">
        <v-card-title>Agregar Candidato {{ color }}</v-card-title>
        <v-divider />
        <Candidato v-model="candidato" />
        <paleta-colores v-model="color" titulo="Selecciona un color" />
      </v-card>
    </v-container>
  </v-row>
</template>

<script>
import Candidato from "@/components/candidato";
import PaletaColores from "@/components/common/colores";

export default {
  name: "Registro",
  components: {
    Candidato,
    PaletaColores,
  },
  data() {
    return { candidato: null, color: null };
  },
};
</script>
