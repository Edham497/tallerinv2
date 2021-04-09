<template>
  <v-stepper v-model="e6" vertical  style="min-height: calc(100vh - 65px)">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <div class="display-1 pa-5 text-center">
          Gracias por participar en las elecciones del 2021
        </div>
        <v-card-text class="text-center text-subtitle-2">
          Tus votos han sido enviados.
        </v-card-text>
        <v-card-text>
          <v-progress-linear
            color="pink lighten-4"
            indeterminate
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-subheader class="overline mt-2">
      Hoja de votacion
    </v-subheader>

    <template v-for="(puesto, i) in puestos">
      <v-stepper-step :complete="e6 > i+1" :step="i + 1" :key="'step' + i">
        {{ puesto }}
        <small v-if="items[i] != null">
        {{ get_name(candidatos[puesto][items[i]].partido) }}
      </small>
      </v-stepper-step>
      <v-stepper-content :step="i + 1" :key="'step_c' + i">
        <v-list max-width="450">
          <v-item-group v-model="items[i]">
            <v-item
              v-for="candidato in candidatos[puesto]"
              :key="candidato._id"
              v-slot="{ active, toggle }"
            >
              <v-list-item
                @click="toggle"
                :class="{ pink: active }"
                :dark="active"
              >
                <v-list-item-avatar tile>
                  <v-img :src="get_img(candidato.partido)" v-if="!active" />
                  <v-icon v-else>mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ candidato.nombre }}</v-list-item-title>
                  <v-list-item-title>{{
                    get_name(candidato.partido)
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-item>
          </v-item-group>
        </v-list>
        <v-btn color="primary" @click="next" v-if="items[i] != null">
          Continuar
        </v-btn>
        <v-btn color="grey lighten-2" @click="e6--" v-if="e6 > 1" class="ml-2">
          volver
        </v-btn>
      </v-stepper-content>
    </template>
    <v-stepper-step :step="4">
        Confirmar votos
    </v-stepper-step>
    <v-stepper-content :step="4">
      <v-card v-if="e6 == 4" outlined max-width="400"> 
        <template v-for="(i,j) in items">
          <v-divider :key="'ds4'+j"/>
          <v-subheader :key="'s4'+j">{{puestos[j]}}</v-subheader>
          <v-divider :key="'d4'+j"/>
          <v-list-item :key="j">
              <v-list-item-avatar>
                <v-img :src="get_img(candidatos[puestos[j]][i].partido)"></v-img>
              </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{candidatos[puestos[j]][i].nombre}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{get_name(candidatos[puestos[j]][i].partido)}}
              </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </template>
      </v-card>
      <div class="py-3">* Al confirmar usted estara de acurerdo que no habra cambios.</div>
      <v-btn color="primary" @click="next" >
          Confirmar
        </v-btn>
        <v-btn color="grey lighten-2" @click="e6--" v-if="e6 > 1" class="ml-2">
          volver
        </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import ApiFetcher from "@/api/apiFetch";
// import Partido from "@/components/partido";
export default {
  data() {
    return {
      puestos: ["Senador", "Diputado", "Gobernador"],
      candidatos: [],
      partidos: [],
      items: [null, null, null],
      e6: 1,
      dialog: false,
    };
  },
  components: {
    // Partido,
  },
  methods: {
    getPartido(id) {
      const index = this.partidos.findIndex((partido) => partido._id == id);
      if (index !== -1) return this.partidos[index];
    },
    get_name(id) {
      const partido = this.getPartido(id);
      if (partido) return partido.code;
    },
    get_img(id) {
      const partido = this.getPartido(id);
      if (partido) return require("@/assets/partidos/" + partido.image);
    },
    next() {
      if (this.e6 < 4) this.e6++;
      else {
        this.dialog = true;
        setTimeout(()=>{
          this.$router.push({name: 'Home'})
        }, 2500)
      }
    },
  },
  async mounted() {
    this.$store.commit("init_load")
    const response = await ApiFetcher.getCandidatos();
    this.candidatos = {};
    response.cand.forEach((element) => {
      if (!this.candidatos[element.cargo]) this.candidatos[element.cargo] = [];
      this.candidatos[element.cargo].push(element);
    });

    const res = await ApiFetcher.getPartidos();
    if (res.ok) {
      this.partidos = res.partido;
    }
    this.$store.commit("stop_load")
    console.log(this.partidos);
  },
};
</script>
