<template>
  <v-carousel cycle height="250" width="100%" :show-arrows="false" hide-delimiter-background>
    <v-carousel-item>
      <v-sheet
        width="100%"
        height="100%"
        class="pink white--text text-center d-flex flex-column justify-center"
      >
        <v-toolbar-title class="display-1">Elecciones 2021 </v-toolbar-title>
        <v-card-text class="text-subtitle-1 mt-2">
          Inicia el Proceso Electoral para renovar la Cámara de Diputados y
          diversos cargos en los <b>32 estados del país</b>.
        </v-card-text>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet
        width="100%"
        height="100%"
        class="bg-ine grey--text text--lighten-3 d-flex flex-column justify-center text-center"
      >
        <v-toolbar-title class="display-1">
          Credencial para votar
        </v-toolbar-title>
        <v-card-text class="text-subtitle-1 mt-2">
          Recuerda que tienes hasta el
          <b class="pink--text text--lighten-1 text-h5 ">
            10 de febrero de 2021
          </b>
          para solicitar tu credencial y participar en las elecciones más
          grandes de la historia.
        </v-card-text>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    colors: ["red", "blue", "green", "yellow"],
  }),
};
</script>
