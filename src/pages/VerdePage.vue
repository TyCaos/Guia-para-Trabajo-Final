<script setup lang="ts">
import { useRouter } from 'vue-router'
import ColorPage from '../components/ColorPage.vue'

const router = useRouter()

const goToCartaIntro = () => {
  router.push('/carta-intro')
}
</script>

<template>
  <ColorPage
    colorName="verde"
    title="¿Cómo me presento a una empresa?"
    buttonText="Crea una carta de presentación ganadora"
    @button-click="goToCartaIntro"
  />
</template>
