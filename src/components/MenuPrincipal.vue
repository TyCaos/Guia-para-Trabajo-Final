<template>
  <div class="menu rainbow-bg">
    <h1>Guía para el Trabajo</h1>
    <h5>¡Queremos verte triunfar!</h5>
    <div class="buttons">
      <RouterLink to="/rojo" class="btn rojo">Test de Habilidades</RouterLink>
      <RouterLink to="/naranjo" class="btn naranjo">Explicación Curriculum Vitae</RouterLink>
      <RouterLink to="/amarillo" class="btn amarillo">Curriculum Vitae Interactivo</RouterLink>
      <RouterLink to="/verde" class="btn verde">Carta de Presentación</RouterLink>
      <RouterLink to="/celeste" class="btn celeste">Mail para el trabajo</RouterLink>
      <RouterLink to="/azul" class="btn azul">Consejos de vestimenta Laboral</RouterLink>
      <RouterLink to="/violeta" class="btn violeta">Entrevista Laboral</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 5rem;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}
h5 {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 1rem 2rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.btn.amarillo {
  color: var(--amarillo-text);
}

.btn:hover {
  transform: scale(1.05);
}

.rojo     { background-color: var(--rojo); }
.naranjo  { background-color: var(--naranjo); }
.amarillo { background-color: var(--amarillo); }
.verde    { background-color: var(--verde); }
.celeste  { background-color: var(--celeste); }
.azul     { background-color: var(--azul); }
.violeta  { background-color: var(--violeta); }

</style>
