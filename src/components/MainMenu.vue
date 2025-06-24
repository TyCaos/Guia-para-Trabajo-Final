<template>
  <nav class="flex flex-wrap justify-center gap-4 p-6 font-poppins">
    <RouterLink
      v-for="(item, index) in botones"
      :key="index"
      :to="`/${item.ruta}`"
      :class="[
        'px-6 py-3 rounded-lg text-white text-lg font-bold transition-transform duration-200 hover:scale-105',
        `bg-arcoiris-${item.ruta}`
      ]"
    >
      {{ item.nombre }}
    </RouterLink>
  </nav>
</template>

<script setup>
const botones = [
  { nombre: 'Rojo', ruta: 'rojo' },
  { nombre: 'Naranjo', ruta: 'naranjo' },
  { nombre: 'Amarillo', ruta: 'amarillo' },
  { nombre: 'Verde', ruta: 'verde' },
  { nombre: 'Celeste', ruta: 'celeste' },
  { nombre: 'Azul', ruta: 'azul' },
  { nombre: 'Violeta', ruta: 'violeta' },
]
</script>