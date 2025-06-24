<script setup lang="ts">
import ColorPage from '../components/ColorPage.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function irActividadCorreo() {
  router.push('/actividad-celeste')
}
</script>

<template>
  <ColorPage
    colorName="celeste"
    title="¿Cómo envío mi CV a los reclutadores?"
    buttonText="Redacta un mail de forma profesional, clara y concisa"
    @button-click="irActividadCorreo"
  />
</template>
