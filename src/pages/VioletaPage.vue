<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

function irConsejos() {
  router.push('/violeta-consejos')
}
</script>

<template>
  <ColorPage
    colorName="violeta"
    title="¿Cómo tener una entrevista exitosa?"
    buttonText="Consejos para tener éxito en una entrevista laboral"
    @button-click="irConsejos"
  />
</template>
