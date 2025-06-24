<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

function goToQuiz() {
  router.push('/quiz-rojo')
}
</script>

<template>
  <ColorPage
    colorName="rojo"
    title="¿Cuál es tu superpoder laboral?"
    buttonText="Descubre tus habilidades ideales"
    @button-click="goToQuiz"
  />
</template>
