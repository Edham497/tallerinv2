<template>
  <v-container
    class="d-flex flex-column justify-center align-center text-center"
  >
    <v-card
      class="pa-5 rounded-md"
      width="100%"
      height="80vh"
      max-width="550"
      flat
    >
      <v-toolbar-title>Inicia Sesion para continuar</v-toolbar-title>
      <v-card-text class="pb-0">
        <v-form @submit.prevent="submit">
          <v-textField
            label="INE"
            v-model="user.codigoINE"
            outlined
            prepend-inner-icon="mdi-account"
          ></v-textField>
          <v-textField
            label="Contraseña"
            type="password"
            v-model="user.pass"
            prepend-inner-icon="mdi-lock"
            outlined
          ></v-textField>
          <v-btn type="submit">Continuar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import ApiFetcher from "@/api/apiFetch"
export default {
  
  data() {
    const user = {
      codigoINE: null,
      pass: null,
    };
    return { user };
  },
  methods: {
    async submit() {
      if(this.user.codigoINE != null && this.user.pass != null){
        const response = await ApiFetcher.login(this.user)
        if(response.ok){
          this.$store.commit('init_load')
          setTimeout(()=> {
            this.$store.commit('saveSesion', response.user[0])
            this.$router.push({name: 'Home'})
            this.$store.commit('stop_load')
          }, 1500)
        }
      }else{
        console.log('No hay datos')
      }
    },
  },
};
</script>
