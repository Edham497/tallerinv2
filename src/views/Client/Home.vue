<template>
  <v-container class="d-flex flex-column justify-center pt-5">
    <div class="display-1">Bienvendo, {{ fullName }}</div>
    <v-card
      class="mt-5"
      color="pa-3 blue lighten-4 blue--text font-weight-bold"
    >
      <label>
        <v-icon class="blue--text mx-4">mdi-information</v-icon> La finalidad de este
        proyecto es brindar un metodo facil, rapido y seguro a los ciudadanos
        para dar su voto sin riesgos de contagio por COVID-19 implementando asi
        una urna electronica con la cual el voto sera por internet.
      </label>
    </v-card>

    <v-row>
      <v-col cols="12" md="9">
        <v-card class="mt-5">
          <v-card-title>
            <v-icon class="pr-4">mdi-vote</v-icon>Urna en linea
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p class="text-subtitle-1">
              A partir de septiembre de 2020 inicia el Proceso Electoral para
              renovar la Cámara de Diputados y diversos cargos en los 32 estados
              del país. Consulta detalles de la elección más grande en la
              historia de México.
            </p>
            <label class="overline">
              Las elecciones estaran disponibles el
              <v-chip dark color="pink">6 de junio del 2021</v-chip> desde las
              <v-chip dark small>7:00 AM</v-chip> hasta las
              <v-chip dark small>10:00 PM</v-chip>
            </label>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="pink lighten-3"
              dark
              @click="$router.push({ name: 'Votar' })"
              >ir a votar</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-card class="mt-5 mx-auto">
          <v-card-title>Elecciones locales</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            El INE en coordinación con los Organismos Públicos Locales
            desarrollarán las actividades para la elección de Gubernaturas,
            Jefatura de Gobierno de la Ciudad de México, Congresos Locales,
            Ayuntamientos, Juntas Municipales y Alcaldías. Consulta los detalles
            de cada proceso electoral local seleccionando la entidad de tu
            interés.
            <p class="pt-2">
              <b>Importante</b> La Sala Superior del Tribunal Electoral del
              Poder Judicial de la Federación (TEPJF) revocó el acuerdo
              INE/CG187/2020 por el cual el INE ejerció la facultad de atracción
              para ajustar a una fecha única la conclusión del periodo de
              precampañas, así como de la recolección de apoyo ciudadano, para
              los procesos electorales locales concurrentes de este año, con el
              proceso electoral federal 2020-2021, por lo que los plazos se
              ajustarán e irán actualizando conforme lo determinen las
              autoridades electorales.
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions
            ><v-spacer></v-spacer><v-btn>Mas informacion</v-btn></v-card-actions
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mt-5 mx-auto">
          <img
            :src="require('@/assets/coahuila-urnaelectronica.png')"
            style="width:100%"
          />
          <v-divider></v-divider>
          <v-card-title style="word-break: break-word">
            Urna Electrónica Elecciones Locales 2021
          </v-card-title>
          <v-card-subtitle>COAHUILA</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            <p>
              Se instalarán 54 casillas con urna electrónica en 10 distritos
              electorales
            </p>
            <p>
              Se utilizará la urna electrónica desarrollada por el Instituto
              Electoral de Coahuila
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-spacer></v-spacer>
            <v-btn color="pink lighten-2" dark>ubica tu casilla</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fullName"]),
  },
  mounted() {
    this.$store.commit("init_load");
    setTimeout(() => {
      this.$store.commit("stop_load");
    }, 2500);
  },
};
</script>
