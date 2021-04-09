<template>
  <v-card
    :flat="flat"
    :outlined="outlined"
    :color="color"
    @click="$emit('click')"
    :dark="dark"
    class="ma-2 ma-md-5"
    width="95%"
    max-width="400px"
  >
    <v-list-item>
      <v-list-item-avatar size="100px" tile>
        <v-img
          :src="image ? image : require('@/assets/ubica-modulo-credencial.png')"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          {{ title ? title : "Nombre del Partido" }}
        </v-list-item-title>
        <v-list-item-subtitle class="font-weight-bold">
          {{ codigo ? codigo : "Clave del Partido" }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-scroll-y-transition>
        <div v-if="active" class="display-5 flex-grow-1 text-center">
          <v-icon>mdi-check</v-icon>
        </div>
      </v-scroll-y-transition>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "anuncio",
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: require("@/assets/ubica-modulo-credencial.png"),
    },
    title: {
      type: String,
      default: "Partido Generico",
    },
    codigo: {
      type: String,
      default: "PG",
    },
    color: {
      type: String,
      default: "",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
