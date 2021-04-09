<template>
  <v-container>
    <template v-for="(cargo, i) in Object.keys(candidatos)">
      <v-card :key="i" class="mt-4">
        <v-card-title v-text="cargo"></v-card-title>
        <v-list>
          <v-list-item v-for="(candidato, i) in candidatos[cargo]" :key="i">
              <v-list-item-avatar tile>
                  <v-img :src="require('@/assets/partidos/' + get_img(candidato.partido))"></v-img>
              </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ candidato.nombre }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ get_name(candidato.partido) }}
              </v-list-item-subtitle>
              <v-list-item-subtitle v-if="cargo != 'Presidente'">
                {{ candidato.lugar }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
  </v-container>
</template>
<script>
import ApiFetcher from "@/api/apiFetch";
export default {
  data: () => ({
    candidatos: {},
    partidos: [],
  }),
  methods: {
    getPartido(id) {
      const index = this.partidos.findIndex((partido) => partido._id == id);
      if (index !== -1) return this.partidos[index];
    },
    get_name(id) {
      const partido = this.getPartido(id)
      if(partido) return partido.code
    },
    get_img(id){
      const partido = this.getPartido(id)
      if(partido) return partido.image
    }
  },
  async mounted() {
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
    console.log(this.partidos);
  },
};
</script>
