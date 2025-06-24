<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

function irActividad() {
  router.push('/actividad-azul')
}
</script>

<template>
  <ColorPage
    colorName="azul"
    title="¡Causa una buena primera impresión!"
    buttonText="Tips de vestimenta para el trabajo"
    @button-click="irActividad"
  />
</template>
