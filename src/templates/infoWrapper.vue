<template>
  <v-sheet
    class="my-5 pa-8 grey--text text--darken-2 d-flex flex-column justify-center align-center"
    max-width="100%"
    :class="color"
  >
    <v-toolbar-title class="text-h5 pb-5" v-text="titulo" />
    <v-row align="center" justify="center">
      <v-col cols="12" md="5">
        <slot name="izquierda" />
      </v-col>
      <v-col class="text-subtitle-1 pa-5" cols="12" md="5">
        <slot name="derecha" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: "titulo",
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
};
</script>
