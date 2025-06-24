<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

function irActividad() {
  router.push('/amarillo-orden-cv')
}
</script>

<template>
  <ColorPage
    colorName="amarillo"
    title="¿Por dónde empezar el armado de CV?"
    buttonText="Aprende a crear tu CV de forma correcta y comprensible"
    @button-click="irActividad"
  />
</template>
