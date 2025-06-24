<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

function irACv() {
  router.push('/naranjo-cv') 
}
</script>

<template>
  <ColorPage
    colorName="naranjo"
    title="¿Cómo hacer un CV que hable bien de ti?"
    buttonText="Aprende qué debe ir en tu CV"
    @button-click="irACv"
  />
</template>
