<template>
  <v-tabs fixed-tabs v-model="value">
    <v-tab @click="$router.push('/admin/registrar/partido')">Partidos</v-tab>
    <v-tab @click="$router.push('/admin/registrar/candidato')">Candidatos</v-tab>
    <v-tab-item>
      <router-view></router-view>
    </v-tab-item>
    <v-tab-item>
      <router-view></router-view>
    </v-tab-item>
  </v-tabs>
</template>
