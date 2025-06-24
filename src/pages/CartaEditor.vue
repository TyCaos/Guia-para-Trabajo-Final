<script setup lang="ts"> 
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const volverACartaIntro = () => {
  router.push('/carta-intro') // Router
}

const nombre = ref('')
const empresa = ref('')
const puesto = ref('')
const habilidades = ref('')

const router = useRouter()

const carta = computed(() => {
  return `
Estimado/a ${empresa.value},

Mi nombre es ${nombre.value} y me gustaría postularme para el puesto de ${puesto.value}. 

Adjunto mi currículum vitae para su consideración. 
Estoy muy interesado/a en la oportunidad y confío en que mis habilidades. 
Especialmente en ${habilidades.value}. 
Serán de gran valor para su equipo.

Agradezco de antemano su tiempo y consideración.

Quedo atento/a a sus comentarios.
Atentamente,

${nombre.value}
`.trim()
})

const allFieldsFilled = computed(() => {
  return nombre.value && empresa.value && puesto.value && habilidades.value
})

const copyToClipboard = async () => {
  if (!allFieldsFilled.value) return
  try {
    await navigator.clipboard.writeText(carta.value)
    alert('Carta copiada al portapapeles ✅')
  } catch (e) {
    alert('Error al copiar la carta')
  }
}

const goToMenu = () => {
  router.push('/')
}
</script>

<template>
  <div class="page-green">
    <div class="editor-container">
      <h2>Generador de Carta de Presentación</h2>

      <form @submit.prevent>
        <div class="form-group">
          <label for="nombre">Tu nombre:</label>
          <input id="nombre" v-model="nombre" placeholder="Ej. Juan Pérez" />
        </div>

        <div class="form-group">
          <label for="empresa">Nombre de la empresa o reclutador:</label>
          <input id="empresa" v-model="empresa" placeholder="Ej. Acme S.A. o Lic. Rodríguez" />
        </div>

        <div class="form-group">
          <label for="puesto">Puesto al que aplicas:</label>
          <input id="puesto" v-model="puesto" placeholder="Ej. Analista de datos" />
        </div>

        <div class="form-group">
          <label for="habilidades">Habilidades destacadas:</label>
          <input id="habilidades" v-model="habilidades" placeholder="Ej. análisis de datos, liderazgo, comunicación" />
        </div>
      </form>

      <div class="carta-preview">
        <pre>{{ carta }}</pre>
      </div>

      <button
        class="copy-btn"
        :disabled="!allFieldsFilled"
        @click="copyToClipboard"
      >
        Copiar carta al portapapeles
      </button>
    </div>
    <button class="btn-volver-esquina verde" @click="volverACartaIntro">
  ← Volver Atrás
</button>
<div class="btn-container-centro">
  <router-link to="/carta-quiz" class="btn-continuar-centro">
    Continuar con Carta ✍️
  </router-link>
</div>

<!-- Botón inferior derecho -->
<router-link to="/celeste" class="btn-fijo-derecha">
  Continuar →
</router-link>

    <button class="menu-btn" @click="goToMenu">← Volver al menú</button>
  </div>
</template>

<style scoped>
.page-green {
  background-color: var(--verde);
  min-height: 100vh;
  padding: 3rem 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.editor-container {
  background-color: var(--editor-bg);
  border-radius: 16px;
  padding: 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

h2 {
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.3rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-color);
}

input {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid var(--input-border);
  background-color: var(--input-bg);
  color: var(--input-text);
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

input::placeholder {
  color: #a9d1a9;
}

input:focus {
  border-color: #051f10;
  outline: none;
}

.carta-preview {
  background-color: var(--preview-bg);
  border-radius: 10px;
  padding: 1.2rem;
  margin: 2rem 0 1rem;
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  min-height: 200px;
  width: 100%;
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.copy-btn {
  width: 100%;
  background-color: #051f10;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.copy-btn:disabled {
  background-color: #9bd9ae;
  cursor: not-allowed;
}

.copy-btn:hover:not(:disabled) {
  background-color: #1f4f2f;
}

.menu-btn {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 700;
  transition: color 0.3s ease;
}

.menu-btn:hover {
  opacity: 0.8;
}

.btn-volver-esquina {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: #22cd69;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.4);
  transition: background-color 0.3s;
  z-index: 999;
}

.btn-volver-esquina:hover {
  background-color: #1ca65a;
}

.btn-container-centro {
  text-align: center;
  margin: 2rem 0 4rem;
}

.btn-continuar-centro {
  background-color: #22cd69;
  color: white;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(30, 245, 87, 0.25);
  transition: background-color 0.3s ease;
}

.btn-continuar-centro:hover {
  background-color: #1ca65a;
}

/* Botón fijo inferior derecho */
.btn-fijo-derecha {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #22cd69;
  color: white;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(30, 245, 87, 0.25);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-fijo-derecha:hover {
  background-color: #1ca65a;
}
</style>


