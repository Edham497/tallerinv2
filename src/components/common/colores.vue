<template>
  <v-sheet>
    <v-subheader v-text="titulo"/>
    <v-btn
      class="ma-2"
      fab
      x-small
      v-for="(color, i) in colores"
      :color="color.getColor()"
      :dark="color.needDark"
      @click="setCurrentColor(i)"
      :key="i"
    >
      <v-icon v-if="color.selected">mdi-check</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script>
export default {
  props: ["value", "titulo"],
  data() {
    let colores = [
      new Color("grey lighten-4", false),
      new Color("brown darken-3", true),
      new Color("pink", true),
      new Color("red darken-2", true),
      new Color("orange", true),
      new Color("amber", true),
      new Color("yellow", false),
      new Color("lime", false),
      new Color("green", true),
      new Color("cyan", true),
      new Color("blue", true),
      new Color("indigo", true),
      new Color("purple", true),
      new Color("black", true),
    ];
    let index = null;
    return { colores, index };
  },

  methods: {
    setCurrentColor(color) {
      if (!this.index){
        this.colores[color].selected = true
        this.index = this.colores[color];
      }else{
        this.colores[color].selected = true
        this.index.selected = false
        this.index = this.colores[color];
      }
      this.$emit("input", {color: this.index.getColor(), dark: this.index.needDark});
    },
  },
  created() {
    this.setCurrentColor(0);
  },
};
class Color {
  constructor(color, dark) {
    this.color = color;
    this.needDark = dark;
    this.selected = false;
  }
  getColor() {
    return this.color;
  }
}
</script>
