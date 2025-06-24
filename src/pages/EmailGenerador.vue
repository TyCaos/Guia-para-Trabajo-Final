<template>
  <div class="container">
    <h2>📧 Escribe tu email para enviar el CV</h2>

    <form @submit.prevent>
      <div class="row">
        <input v-model="nombre" placeholder="Tu nombre" />
        <input v-model="destinatario" placeholder="Nombre del destinatario (Ej: Recursos Humanos)" />
      </div>

      <div class="row">
        <input v-model="puesto" placeholder="Puesto al que aplicás" />
        <input v-model="empresa" placeholder="Nombre de la empresa" />
      </div>

      <textarea readonly :value="mensajeGenerado" />

      <button @click="copiarTexto">📋 Copiar email al portapapeles</button>
      <router-link to="/azul" class="btn-fijo-derecha">
  Continuar →
</router-link>


      <router-link to="/actividad-celeste" class="volver">← Volver a consejos</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const nombre = ref('')
const destinatario = ref('')
const puesto = ref('')
const empresa = ref('')
const adjuntaCV = ref(true)

const mensajeGenerado = computed(() => {
  return `Asunto: Postulación para el puesto de ${puesto.value} en ${empresa.value}

Estimado/a ${destinatario.value},

Me dirijo a usted con el fin de postularme para el puesto de ${puesto.value} en ${empresa.value}. ${adjuntaCV.value ? 'Adjunto mi CV y' : ''} quedo a disposición para ampliar la información.

Saludos cordiales,
${nombre.value}`
})

function copiarTexto() {
  navigator.clipboard.writeText(mensajeGenerado.value)
    .then(() => alert('¡Email copiado al portapapeles!'))
    .catch(() => alert('Error al copiar el texto'))
}
</script>

<style scoped>
.container {
  background-color: var(--bg-color);
  max-width: 900px;
  margin: 3rem auto;
  padding: 3rem 2rem;
  border-radius: 18px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  color: var(--text-color-celeste);
  font-family: 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  background-color: var(--input-bg);
  color: var(--text-color-celeste);
  font-weight: 500;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

input::placeholder {
  color: var(--placeholder-color);
}

textarea {
  width: 100%;
  min-height: 200px;
  padding: 1.2rem;
  background: var(--textarea-bg);
  border: none;
  border-radius: 12px;
  resize: none;
  font-size: 1.05rem;
  color: var(--text-color-celeste);
  transition: background-color 0.3s ease, color 0.3s ease;
}

button {
  background-color: var(--button-bg);
  color: #fff;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--button-hover-bg);
}

.volver {
  font-size: 1rem;
  color: var(--link-color);
  text-decoration: none;
  text-align: center;
}

.btn-fijo-derecha {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--button-hover-bg);
  color: white;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(30, 141, 245, 0.25);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-fijo-derecha:hover {
  background-color: var(--button-bg);
}

</style>