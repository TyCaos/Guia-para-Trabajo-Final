<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface Question {
  text: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    text: '¿Qué tipo de actividades disfrutas más?',
    options: [
      { label: 'Resolver problemas o rompecabezas', value: 'analitico' },
      { label: 'Organizar eventos o tareas', value: 'organizador' },
      { label: 'Crear historias, arte o música', value: 'creativo' },
      { label: 'Ayudar y escuchar a los demás', value: 'comunicador' },
      { label: 'Explorar la naturaleza o hacer cosas manuales', value: 'practico' },
    ],
  },
  {
    text: '¿Cómo prefires trabajar?',
    options: [
      { label: 'Con datos, hechos y lógica', value: 'analitico' },
      { label: 'Planificando y siguiendo estructuras', value: 'organizador' },
      { label: 'Con libertad y sin rutina fija', value: 'creativo' },
      { label: 'Con personas, en equipo o uno a uno', value: 'comunicador' },
      { label: 'Haciendo cosas prácticas o al aire libre', value: 'practico' },
    ],
  },
  {
    text: '¿Qué te representa mejor?',
    options: [
      { label: 'Analítico, curioso y observador', value: 'analitico' },
      { label: 'Organizado, metódico y confiable', value: 'organizador' },
      { label: 'Original, sensible y expresivo', value: 'creativo' },
      { label: 'Empático, comunicativo y sociable', value: 'comunicador' },
      { label: 'Práctico, activo y concreto', value: 'practico' },
    ],
  },
  {
    text: '¿Qué tarea elegirías?',
    options: [
      { label: 'Analizar datos para tomar decisiones', value: 'analitico' },
      { label: 'Organizar un evento o proyecto', value: 'organizador' },
      { label: 'Diseñar una imagen, historia o idea', value: 'creativo' },
      { label: 'Motivar o guiar a un grupo', value: 'comunicador' },
      { label: 'Construir algo o arreglarlo con tus manos', value: 'practico' },
    ],
  },
  {
    text: '¿Qué frase te representa más?',
    options: [
      { label: 'Pienso, luego existo', value: 'analitico' },
      { label: 'Todo tiene su lugar y su momento', value: 'organizador' },
      { label: 'La imaginación no tiene límites', value: 'creativo' },
      { label: 'Las personas importan', value: 'comunicador' },
      { label: 'Manos a la obra', value: 'practico' },
    ],
  },
  {
    text: '¿Qué te motiva más en un trabajo?',
    options: [
      { label: 'Descubrir cómo funcionan las cosas', value: 'analitico' },
      { label: 'Tener un plan y cumplirlo con éxito', value: 'organizador' },
      { label: 'Expresar mis ideas y emociones', value: 'creativo' },
      { label: 'Conectar y ayudar a otras personas', value: 'comunicador' },
      { label: 'Ver resultados tangibles de mi esfuerzo', value: 'practico' },
    ],
  },
  {
    text: '¿Cuál de estas materias te gustaba más en la escuela?',
    options: [
      { label: 'Matemáticas o ciencia', value: 'analitico' },
      { label: 'Economía o historia', value: 'organizador' },
      { label: 'Arte o literatura', value: 'creativo' },
      { label: 'Psicología o comunicación', value: 'comunicador' },
      { label: 'Educación física o tecnología', value: 'practico' },
    ],
  },
];

const currentQuestion = ref(0);
const answers = ref<string[]>([]);

function selectOption(value: string) {
  answers.value[currentQuestion.value] = value;
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
  } else {
    const results = calculateResult();
    router.push({ name: 'resultados-rojo', query: results });
  }
}

function calculateResult() {
  const counts: Record<string, number> = {
    analitico: 0,
    organizador: 0,
    creativo: 0,
    comunicador: 0,
    practico: 0,
  };
  answers.value.forEach(a => counts[a]++);
  const perfil = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return { perfil };
}
</script>

<template>
  <div class="paginaRoja">
    <div class="quiz-container">
      <div class="pregunta">
        <h2>{{ questions[currentQuestion].text }}</h2>
      </div>
      <div class="opciones">
        <button
          v-for="option in questions[currentQuestion].options"
          :key="option.value"
          @click="selectOption(option.value)"
          class="opcion"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paginaRoja {
  background-color: var(--rojo-body-bg);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.quiz-container {
  background: var(--rojo-fondo);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
}

.pregunta h2 {
  font-size: 2rem;
  color: var(--rojo-texto);
  margin-bottom: 1.8rem;
  text-align: center;
}

.opciones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.opcion {
  background: var(--rojo);
  color: var(---rojo-boton-hover);
  border: none;
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.opcion:hover {
  background: var(--rojo-hover);
}
</style>
