<template>
    <v-card :flat="flat" :color="color" :width="width" :dark="dark" :max-width="maxw" @click="$emit('click')">
        <v-img :src="image" max-height="200" :contain="imageContain"></v-img>
        <v-divider></v-divider>
        <v-card-title v-text="title"/>
        <v-card-text v-if="text" v-text="text" />
    </v-card>
</template>

<script>
export default {
    name: "anuncio",
    props: {
        flat: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            required: true,
            default: require("@/assets/ubica-modulo-credencial.png"),
        },
        title: {
            type: String,
            required: true,
            default: "Elecciones 2021"
        },
        text: {
            type: String,
            required: false,
        },
        imageContain: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '350px'
        },
        color: {
            type: String,
            default: 'white'
        },
        maxw: {
            type: String,
            default: 'white'
        }
    },
}
</script>