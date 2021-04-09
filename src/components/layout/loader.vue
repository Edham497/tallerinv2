<template>
  <v-dialog v-model="loading" persistent width="80">
      <v-sheet class="pink lighten-1 d-flex align-center justify-center pa-5">
          <v-progress-circular color="white" indeterminate></v-progress-circular>
      </v-sheet>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
      stopLoader(){
          this.$store.commit('stop_load')
      },
      restartLoader(){
          this.$store.commit('init_load')
      }
  },
  computed: {
    ...mapGetters(['loading'])
  }
};
</script>
