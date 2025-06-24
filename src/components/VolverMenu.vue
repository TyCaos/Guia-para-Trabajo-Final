<template>
  <router-link
    v-if="!esMenu"
    to="/"
    class="volver-menu"
    aria-label="Volver al menú principal"
  >
    ← Volver al menú
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const esMenu = route.path === '/'
</script>

<style scoped>
.volver-menu {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background: none;
  color: #26c8ee;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  text-decoration: underline;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.volver-menu:hover {
  opacity: 0.8;
  text-decoration: none;
}
</style>
