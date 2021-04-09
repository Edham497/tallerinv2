<template>
  <v-container
    class="d-flex flex-column justify-center align-center text-center"
  >
    <v-card class="pa-5 rounded-md" width="100%" max-width="550" flat>
      <v-toolbar-title class="py-1">
        Completa los siguientes campos
      </v-toolbar-title>
      <v-card-text class="pb-0 px-0">
        <v-form @submit.prevent="submit">
          <v-textField
            label="Apellido Paterno"
            v-model="user.apPat"
            outlined
          ></v-textField>
          <v-textField
            label="Apellido Materno"
            v-model="user.apMat"
            outlined
          ></v-textField>
          <v-textField
            label="Nombre(s)"
            v-model="user.nombre"
            outlined
          ></v-textField>
          <!-- <div class="pr-3 d-flex flex-row">
          <v-subheader>Fecha de nacimiento</v-subheader>
          <v-textField
            label="DD"
            outlined
            class="mx-1"
            dense
            type="number"
            v-model="user.name"
          ></v-textField>
          <v-textField
            label="MM"
            outlined
            class="mx-1"
            dense
            type="number"
            v-model="user.name"
          ></v-textField>
          <v-textField
            label="AA"
            outlined
            class="mx-1"
            dense
            type="number"
            v-model="user.name"
          ></v-textField>
        </div> -->
          <v-textField
            label="Codigo INE"
            v-model="user.codigoINE"
            outlined
          ></v-textField>
          <v-textField
            label="Contraseña"
            type="password"
            v-model="user.pass"
            outlined
          ></v-textField>
          <v-textField
            label="Confirmar Contraseña"
            type="password"
            v-model="confpass"
            outlined
          ></v-textField>
          <v-btn type="submit" block color="pink" dark>Continuar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import ApiFetcher from '@/api/apiFetch'
export default {
  data() {
    const user = {
      nombre: null,
      apPat: null,
      apMat: null,
      pass: null,
      lugar: null,
      casilla: null,
      codigoINE: null,
      votoEmitido: null,
    };
    let confpass = null;
    return { user, confpass };
  },
  methods: {
    async submit() {
      if (this.user.pass != null && this.user.pass == this.confpass) {
        const response = await ApiFetcher.registro(this.user)
        console.log(response)
        if(response.ok){
          this.$store.commit('saveSesion', response.user)
          this.$emit('restartLoader')
          this.$router.push({name: 'Home'})
        }
      } else {
        console.log("No hay datos");
      }
    },
  },
};
</script>
