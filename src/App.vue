<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div class="app">
    <router-view />

    <!-- Botón de volver al menú principal -->
    <div v-if="route.name !== 'MenuPrincipal'" class="volver-abajo">
      <router-link to="/" class="btn-volver rainbow-bg">VOLVER AL MENÚ</router-link>
    </div>

    <!-- Botón de modo claro/oscuro -->
    <button
      class="toggle-mode"
      @click="toggleTheme"
      :aria-label="isDark ? 'Modo oscuro activado, cambiar a modo claro' : 'Modo claro activado, cambiar a modo oscuro'"
    >
      <span v-if="isDark">🌙</span>
      <span v-else>☀️</span>
    </button>
  </div>
</template>

<style>
.app {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>

<style scoped>
.volver-abajo {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.btn-volver {
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

/* Usa el fondo arcoíris global */
.rainbow-bg {
  background: linear-gradient(
    270deg,
    var(--rainbow-1),
    var(--rainbow-2),
    var(--rainbow-3),
    var(--rainbow-4),
    var(--rainbow-5),
    var(--rainbow-6),
    var(--rainbow-7)
  );
  background-size: 1200% 1200%;
  animation: arcoirisGradient 8s ease infinite;
}

@keyframes arcoirisGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.toggle-mode {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
  z-index: 1001;
  color: var(--text-color);
  user-select: none;
}
</style>
