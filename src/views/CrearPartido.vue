<template>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-card width="100%" max-width="500px">
        <v-card-title>Agregar Partido</v-card-title>
        <v-divider />
        <v-card-text class="pb-0">
          <v-textField label="Nombre del partido" v-model="partido.name" prepend-icon="mdi-pencil"></v-textField>
          <v-textField label="Codigo del partido" v-model="partido.code" prepend-icon="mdi-qrcode"></v-textField>
          <v-container>
            <div>
              Seleccionar color
            </div>
            <v-btn
              class="ma-2"
              fab
              x-small
              v-for="(color, i) in colores"
              :dark="currentColor.needDark"
              :color="color.getColor()"
              @click="setCurrentColor(i)"
              :key="i"
            >
              <v-icon v-if="color.selected">mdi-check</v-icon>
            </v-btn>
          </v-container>
          <v-fileInput
            show-size
            small-chips
            prepend-icon="mdi-image-plus"
            class="pt-5"
            placeholder="Seleccione una imagen"
            v-model="img.content"
            @change="Preview_image"
          ></v-fileInput>
        </v-card-text>
        <v-card-text class="pt-0">
          Vista previa
          <Partido
            :title="partido.name"
            :codigo="partido.code"
            :color="currentColor.getColor()"
            :dark="currentColor.needDark"
            :image="img.url"
          />
        </v-card-text>
        <v-card-actions>
            <v-btn text>cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="pink white--text" @click="Crear_partido">Terminar registro</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</template>

<script>
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

import Partido from "@/components/partido";
import ApiFetcher from "@/api/apiFetch";

export default {
  name: "Registro",
  methods: {
    setCurrentColor(nuevo) {
      this.currentColor.selected = false;
      this.currentColor = this.colores[nuevo];
      this.currentColor.selected = true;
    },
    Preview_image() {
      this.img.url = URL.createObjectURL(this.img.content);
    },
    async Crear_partido(){
        this.partido.color = this.currentColor.getColor()
        this.partido.dark = this.currentColor.needDark
        this.partido.image = this.img.content.name
        console.log(this.partido)
        const response = await ApiFetcher.addPartido(this.partido)
        if(response.ok){
            this.$router.push('/partidos')
        }
    }
  },
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
    let img = {
      url: null,
      content: null,
    };
    let currentColor = colores[0];

    let partido = {
      name: null,
      code: null,
      color: null,
      image: null,
    };

    currentColor.selected = true;
    return { colores, currentColor, img, partido };
  },
  components: {
    Partido,
  },
  async created(){
    //   console.log(await ApiFetcher.getCandidatos(), await ApiFetcher.getPartidos())
  }
};
</script>
