<template>
  <v-container class="pt-15">
    <v-row align="center">
      <v-col md="2" cols="12">
        <v-img
          max-width="250"
          v-if="partido"
          :src="require('@/assets/partidos/' + partido.image)"
        ></v-img>
      </v-col>
      <v-col md="10" cols="12">
        <v-card-title class="display-1">{{partido.name}}</v-card-title>
        <v-card-subtitle class="text-h6 grey--text">{{partido.code}}</v-card-subtitle>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae rem voluptatum minima provident! Fuga quaerat quod perferendis sit magnam optio maiores est, eius sed repellendus asperiores quia, dolore repellat eum, nemo voluptas totam doloribus ullam natus soluta cum voluptatibus. Praesentium labore quasi assumenda error quos eaque, perspiciatis magni consequatur in accusamus commodi nisi laudantium reiciendis provident facilis natus? Est quas aspernatur consectetur tempora cumque? Doloremque, ipsa atque ducimus nisi cupiditate aliquid, neque quo minus cumque, facilis excepturi fugit architecto? Libero asperiores minus ad corrupti hic. Hic laudantium tempore, soluta molestiae deserunt fugit ut voluptatem qui nesciunt, error sit eum.</v-card-text>
      </v-col>
      <v-col cols="12">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiFetcher from "@/api/apiFetch";
// import Partido from "@/components/partido";
export default {
  data: () => ({
    partido: null,
  }),
  components: {
    // Partido,
  },
  async mounted() {
    const response = await ApiFetcher.getPartido(this.$route.params.id);
    if (response.ok) {
      this.partido = response.cand;
    }
  },
};
</script>
