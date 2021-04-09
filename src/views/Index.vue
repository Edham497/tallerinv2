<template>
  <v-container fluid class="px-0">
    <v-sheet
      class="bg-ine mt-10 pa-8 grey--text text--lighten-3  d-flex flex-column justify-center align-center"
    >
      <v-toolbar-title class="display-1">
        Credencial para votar
      </v-toolbar-title>
      <div class="py-5 text-center">
        Ya puedes realizar cualquier trámite de la Credencial en los
        <b>módulos fijos del INE</b>
      </div>
      <v-row no-gutters align="center" justify="center">
        <v-col md="2" cols="12">
          <v-img
            :src="require('@/assets/grafico-credencial-2020.png')"
            contain
            height="150px"
          ></v-img>
        </v-col>
        <v-col md="5" cols="12">
          <div class="text-button text-center">
            Recuerda que tienes hasta el
            <b class="pink--text text--lighten-1 text-h5 pink lighten-4 pa-2"
              >10 de febrero de 2021</b
            >
            para solicitar tu credencial y participar en las elecciones más
            grandes de la historia.
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <info-wrapper color="grey lighten-4 pa-5" titulo="Voto desde el extranjero">
      <template v-slot:izquierda>
        <img
          :src="require('@/assets/registro-voto-extranjero2021.jpg')"
          width="100%"
        />
      </template>
      <template v-slot:derecha>
        <p>
          <b><a href="/auth/registro">Regístrate</a></b> si eres de Baja
          California Sur, Chihuahua, Ciudad de México, Colima, Guerrero,
          Jalisco, Michoacán, Nayarit, Querétaro, San Luis Potosí o Zacatecas.
        </p>
        <p>
          Si no cuentas con tu credencial para votar en el extranjero,
          <b>tramítala antes del 12 de febrero</b> y participa en las decisiones
          importantes de tu ciudad.
        </p>
      </template>
    </info-wrapper>
    <info-wrapper
      
      titulo="Candidaturas Independientes 2021"
    >
      <template v-slot:izquierda>
        <img
          :src="require('@/assets/CI_micrositio-1024x724.png')"
          width="100%"
        />
      </template>
      <template v-slot:derecha>
        <p>
          Al 31 de diciembre de 2020, el INE ha recibido 25,056 apoyos
          ciudadanos de los (as) 38 aspirantes activos (as) de los (as) 42 con
          proceso vigente a una candidatura independiente. Consulta el avance en
          el apartado de Reportes de aspirantes.
        </p>
        <p>
          En esta sección podrás conocer el avance preliminar en la captación de
          apoyo de la ciudadanía de las y los aspirantes a una candidatura
          independiente. Los registros preliminarmente identificados en Lista
          Nominal son aquellos encontrados en Lista Nominal y cuyas imágenes
          (Credencial para Votar, foto viva y firma) fueron revisadas en Mesa de
          Control.
        </p>
        <ul>
          <li>
            31/dic Reporte de avance de apoyo de la ciudadanía y de dispersión
          </li>
          <li>
            24/dic Reporte de avance de apoyo de la ciudadanía y de dispersión
          </li>
          <li>
            17/dic Reporte de avance de apoyo de la ciudadanía y de dispersión
          </li>
          <li>
            10/dic Reporte de avance de apoyo de la ciudadanía y de dispersión
          </li>
        </ul>
      </template>
    </info-wrapper>
  </v-container>
</template>

<script>
import InfoWrapper from "../templates/infoWrapper.vue";
export default {
  name: "Home",
  components: {
    InfoWrapper,
  },
};
</script>

<style scoped>
.bg-ine {
  background: url("/encabezado-propAgosto.jpg");
  /* background-color: linear-gradient(70deg, rgba(0,0,0,0) 40%, rgba(255,255,255,0.52) 100%); */
}
</style>
