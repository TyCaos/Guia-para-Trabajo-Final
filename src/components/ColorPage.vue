<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  colorName: String,
  title: String,
  buttonText: String
})

const emit = defineEmits(['button-click'])

function handleClick() {
  emit('button-click')
}
</script>

<template>
  <div :class="['color-page', props.colorName]">
    <h1>{{ props.title }}</h1>
    <button class="btn" @click="handleClick">{{ props.buttonText }}</button>
    <router-link to="/" class="menu-btn">Volver al menú</router-link>
  </div>
</template>

<style scoped>
.color-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;

  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.color-page h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
  color: var(--title-color);
}

.btn {
  background-color: white;
  color: inherit;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
  background-color: #f0f0f0;
  color: var(--link-color);
}

.menu-btn {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-shadow: 0 0 4px rgba(0,0,0,0.3);
}

.menu-btn:hover {
  text-decoration: none;
  opacity: 0.8;
}

/* Aquí aplicamos los colores según la clase */
.rojo {
  background-color: var(--rojo);
  color: var(--btn-text-rojo, #fff);
}

.naranjo {
  background-color: var(--naranjo);
  color: var(--btn-text-naranjo, #fff);
}

.amarillo {
  background-color: var(--amarillo);
  color: var(--amarillo-text, #242424);
}

.verde {
  background-color: var(--verde);
  color: var(--btn-text-verde, #fff);
}

.celeste {
  background-color: var(--celeste);
  color: var(--btn-text-celeste, #fff);
}

.azul {
  background-color: var(--azul);
  color: var(--btn-text-azul, #fff);
}

.violeta {
  background-color: var(--violeta);
  color: var(--btn-text-violeta, #fff);
}
</style>
