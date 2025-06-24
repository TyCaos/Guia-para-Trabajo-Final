<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const preguntas = ref([
  {
    pregunta: "¿Cuál es tu mayor fortaleza?",
    respuesta: "Habla de una habilidad clave que tengas y cómo la has aplicado exitosamente."
  },
  {
    pregunta: "¿Dónde te ves en 5 años?",
    respuesta: "Explica tus metas a mediano plazo y cómo se alinean con el crecimiento en la empresa."
  },
  {
    pregunta: "¿Por qué quieres trabajar aquí?",
    respuesta: "Muestra que investigaste la empresa y que tus valores coinciden con los de ellos."
  },
  {
    pregunta: "¿Cómo manejas el estrés?",
    respuesta: "Da un ejemplo concreto de cómo mantienes la calma y resuelves problemas bajo presión."
  },
  {
    pregunta: "¿Cuál ha sido tu mayor logro?",
    respuesta: "Describe un logro cuantificable y el impacto que tuvo."
  },
  {
    pregunta: "¿Cómo trabajas en equipo?",
    respuesta: "Demuestra tu habilidad para colaborar, escuchar y contribuir con ideas."
  }
])

const preguntasExpand = ref<Array<boolean>>(preguntas.value.map(() => false))

function toggleRespuesta(i: number) {
  preguntasExpand.value[i] = !preguntasExpand.value[i]
}

function irInicio() {
  router.push('/violeta')
}
</script>

<template>
  <div class="fondo-violeta">
    <section class="bloque-blanco">
      <h2>Preguntas Frecuentes en entrevistas</h2>

      <div class="preguntas-lista">
        <div v-for="(item, i) in preguntas" :key="i" class="pregunta-item">
          <div class="pregunta-titulo" @click="toggleRespuesta(i)">
            {{ item.pregunta }}
          </div>
          <div v-show="preguntasExpand[i]" class="pregunta-respuesta">
            {{ item.respuesta }}
          </div>
        </div>
      </div>
      <router-link to="/rojo" class="btn-fijo-derecha">
  Volver a Empezar
</router-link>


      <button class="btn" @click="irInicio">Volver Atrás</button>
    </section>
  </div>
</template>

<style scoped>
.fondo-violeta {
  background-color: var(--violeta-body-bg);
  min-height: 100vh;
  padding: 2rem 1rem;
  color: var(--violeta-texto);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.bloque-blanco {
  background: var(--violeta-fondo);
  border-radius: 15px;
  color: var(--violeta-parrafo);
  max-width: 700px;
  width: 100%;
  padding: 2rem 3rem;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.preguntas-lista {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.pregunta-item {
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.pregunta-titulo {
  font-weight: bold;
  padding: 0.7rem 0;
  color: var(--violeta-hover);
}

.pregunta-respuesta {
  padding: 0.5rem 0 1rem 1rem;
  color: var(--violeta-parrafo);
}

.btn {
  background-color: var(--violeta-hover);
  color: var(--violeta-opcion-texto);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: var(--violeta-hover);
}

.btn-fijo-derecha {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--violeta-hover);
  color: var(--violeta-opcion-texto);
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(84, 30, 245, 0.25);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-fijo-derecha:hover {
  background-color: var(--violeta);
}


</style>
