<template>
    <v-divider></v-divider>
    <v-stepper-step :complete="e6 > 1" step="1">
      Presidencia Municipal
      <small v-if="partido_selected != null">
        {{ partidos[partido_selected].code }}
      </small>
    </v-stepper-step>
    <v-stepper-content step="1">|
      <v-card class="mb-12 transparent" flat max-width="500">
        <v-item-group v-model="partido_selected">
          <v-item
            v-for="(partido, i) in partidos"
            :key="i"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : partido.color"
              class="d-flex align-center my-2"
              style="transition: .125s ease-in-out"
              @click="toggle"
              :dark="active || partido.dark"
            >
              <v-scroll-y-transition>
                <!-- <div class="text-center flex-grow-1 pa-5">{{partido}}</div> -->
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="partido.image" v-if="!active"></v-img>
                    <v-icon v-else>mdi-check</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ partido.name }}</v-list-item-title>
                    <v-list-item-title>{{ partido.code }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-scroll-y-transition>
            </v-card>
            <!-- <Partido
              :active="active"
              :image="partido.image"
              :title="partido.name"
              :codigo="partido.code"
              :color="partido.color"
              :dark="partido.dark"
              @click="toggle"
            /> -->
          </v-item>
        </v-item-group>
      </v-card>
      <v-btn color="primary" v-if="partido_selected != null" @click="to_e2">
        Continuar
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Sindicaturas
      <small v-if="sindicatura_selected != null">
        {{ partidos[sindicatura_selected].code }}
      </small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card class="mb-12 transparent" flat max-width="500">
        <v-item-group v-model="sindicatura_selected">
          <v-item
            v-for="(partido, i) in partidos"
            :key="i"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : partido.color"
              class="d-flex align-center my-2"
              style="transition: .125s ease-in-out"
              @click="toggle"
              :dark="active || partido.dark"
            >
              <v-scroll-y-transition>
                <!-- <div class="text-center flex-grow-1 pa-5">{{partido}}</div> -->
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="partido.image" v-if="!active"></v-img>
                    <v-icon v-else>mdi-check</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ partido.name }}</v-list-item-title>
                    <v-list-item-title>{{ partido.code }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-scroll-y-transition>
            </v-card>
            <!-- <Partido
              :active="active"
              :image="partido.image"
              :title="partido.name"
              :codigo="partido.code"
              :color="partido.color"
              :dark="partido.dark"
              @click="toggle"
            /> -->
          </v-item>
        </v-item-group>
      </v-card>
      <v-btn color="primary" @click="to_e3">
        Continuar
      </v-btn>
      <v-btn text @click="e6--">
        Vovler
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      Regidurías
      <small v-if="regidura_selected != null">
        {{ partidos[regidura_selected].code }}
      </small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card class="mb-12 transparent" flat max-width="500">
        <v-item-group v-model="regidura_selected">
          <v-item
            v-for="(partido, i) in partidos"
            :key="i"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : partido.color"
              class="d-flex align-center my-2"
              style="transition: .125s ease-in-out"
              @click="toggle"
              :dark="active || partido.dark"
            >
              <v-scroll-y-transition>
                <!-- <div class="text-center flex-grow-1 pa-5">{{partido}}</div> -->
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="partido.image" v-if="!active"></v-img>
                    <v-icon v-else>mdi-check</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ partido.name }}</v-list-item-title>
                    <v-list-item-title>{{ partido.code }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-scroll-y-transition>
            </v-card>
            <!-- <Partido
              :active="active"
              :image="partido.image"
              :title="partido.name"
              :codigo="partido.code"
              :color="partido.color"
              :dark="partido.dark"
              @click="toggle"
            /> -->
          </v-item>
        </v-item-group>
      </v-card>
      <v-btn color="primary" @click="e6++">
        Continuar
      </v-btn>
      <v-btn text @click="e6--">
        Vovler
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Confirmar votos
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card outlined class="mb-2 pb-2" v-if="e6 == 4" max-width="450">
        <template
          v-for="(i, j) in [
            partido_selected,
            sindicatura_selected,
            regidura_selected,
          ]"
        >
          <v-divider :key="j + 'u'"></v-divider>
          <v-subheader :key="j">Presidencia</v-subheader>
          <v-divider :key="j + 'd'"></v-divider>
          <v-list-item :key="'conf' + j">
            <v-list-item-avatar>
              <v-img :src="partidos[i].image"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ partidos[i].name }}</v-list-item-title>
              <v-list-item-title>{{ partidos[i].code }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <!-- <div>{{ partidos[partido_selected] }}</div>
        <div>{{ partidos[sindicatura_selected] }}</div>
        <div>{{ partidos[regidura_selected] }}</div> -->
      </v-card>
      <v-card-text>
        <div>* Al confirmar usted estara de acurerdo que no habra cambios.</div>
      </v-card-text>
      <v-btn color="primary" @click="confirmarVotos">
        Confirmar Votos
      </v-btn>
      <v-btn text @click="e6--">
        Vovler
      </v-btn>
    </v-stepper-content>
    </template>