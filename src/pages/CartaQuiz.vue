<script setup lang="ts">
import { ref } from 'vue'
import confetti from 'canvas-confetti'
import { useRouter } from 'vue-router'
const volverACartaIntro = () => {
  router.push('/carta-intro') //Router
}

interface Question {
  question: string
  options: string[]
  answerIndex: number
}

const questions: Question[] = [
  {
    question: '¿Qué es una carta de presentación?',
    options: [
      'Un documento formal que acompaña al currículum',
      'Una hoja de vida',
      'Una carta de recomendación',
      'Un resumen de habilidades sociales'
    ],
    answerIndex: 0
  },
  {
    question: '¿Qué debe destacar principalmente la carta de presentación?',
    options: [
      'Experiencias irrelevantes',
      'Cualidades y experiencias relevantes para el puesto',
      'Los hobbies del candidato',
      'El salario deseado'
    ],
    answerIndex: 1
  },
  {
    question: '¿Cuál es el objetivo principal de la carta de presentación?',
    options: [
      'Explicar por qué el candidato es el adecuado para la empresa',
      'Solicitar un aumento salarial',
      'Describir la historia personal',
      'Invitar a la empresa a un evento'
    ],
    answerIndex: 0
  }
]

const selectedOptions = ref<(number | null)[]>(questions.map(() => null))
const showResults = ref(false)
const score = ref(0)

const selectOption = (questionIndex: number, optionIndex: number) => {
  if (!showResults.value) {
    selectedOptions.value[questionIndex] = optionIndex
  }
}

const calculateScore = () => {
  let count = 0
  questions.forEach((q, i) => {
    if (selectedOptions.value[i] === q.answerIndex) count++
  })
  score.value = count
}

const showScoreModal = () => {
  calculateScore()
  showResults.value = true
  if (score.value === questions.length) {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } })
  }
}

const restartQuiz = () => {
  selectedOptions.value = questions.map(() => null)
  score.value = 0
  showResults.value = false
}

const router = useRouter()
const goToMenu = () => router.push('/')
</script>

<template>
  <div class="quiz-wrapper">
    <div class="quiz-container">
      <h2>Test de Carta de Presentación</h2>

      <div v-for="(q, index) in questions" :key="index" class="question-block">
        <p class="question">{{ q.question }}</p>
        <ul class="options-list">
          <li
            v-for="(option, idx) in q.options"
            :key="idx"
            :class="[
              selectedOptions[index] === idx ? 'selected' : '',
              showResults && idx === q.answerIndex ? 'correct' : '',
              showResults && selectedOptions[index] === idx && idx !== q.answerIndex ? 'wrong' : ''
            ]"
            @click="selectOption(index, idx)"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <button
        class="submit-btn"
        :disabled="selectedOptions.includes(null)"
        @click="showScoreModal"
      >
        Ver resultado
      </button>
    </div>

    <div v-if="showResults" class="modal-overlay">
      <div class="modal-content">
        <h3>Tu puntuación: {{ score }} / {{ questions.length }}</h3>

        <p v-if="score === questions.length" class="congrats">🎉 ¡Medalla de Oro!</p>
        <p v-else-if="score >= questions.length / 2" class="good-job">🥈 ¡Buen trabajo!</p>
        <p v-else class="try-again">🥉 Sigue practicando</p>

        <button class="restart-btn" @click="restartQuiz">Intentar de nuevo</button>
      </div>
    </div>

    <button class="btn-volver-esquina verde" @click="volverACartaIntro">
  ← Volver Atrás
</button>
<!-- Botón central para volver a carta-editor -->
<div class="btn-container-centro">
  <router-link to="/carta-editor" class="btn-continuar-centro">
    ← Volver a editar carta
  </router-link>
</div>

<!-- Botón fijo inferior derecho para continuar a /celeste -->
<router-link to="/celeste" class="btn-fijo-derecha">
  Continuar →
</router-link>


    <button class="menu-btn" @click="goToMenu">← Volver al menú</button>
  </div>
</template>

<style scoped>
.quiz-wrapper {
  background-color: #22cd69;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: background-color 0.3s;
}

.quiz-container {
  max-width: 800px;
  background: var(--editor-bg);
  color: var(--text-color);
  border-radius: 16px;
  padding: 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #22cd69;
  font-size: 1.8rem;
}

.question-block {
  margin-bottom: 1.5rem;
}

.question {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.options-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.options-list li {
  padding: 0.9rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: var(--card-bg);
  transition: all 0.3s;
  font-weight: 500;
  color: var(--text-color);
}

.options-list li.selected {
  border-color: #22cd69;
  background-color: #dff6e0;
}

.options-list li.correct {
  background-color: #22cd69;
  color: white;
  border-color: #176c35;
}

.options-list li.wrong {
  background-color: #ef5343;
  color: white;
  border-color: #a23328;
}

.submit-btn {
  background-color: #22cd69;
  color: white;
  border: none;
  padding: 0.9rem 1.7rem;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s;
}

.submit-btn:disabled {
  background-color: #a1d8a0;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background-color: #1aa757;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--editor-bg);
  color: var(--text-color);
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: background-color 0.3s, color 0.3s;
}

.congrats {
  color: #22cd69;
  font-size: 1.4rem;
  font-weight: 800;
  margin: 1rem 0;
}

.good-job {
  color: #ffc42b;
  font-size: 1.2rem;
  margin: 1rem 0;
}

.try-again {
  color: #ef5343;
  font-size: 1.2rem;
  margin: 1rem 0;
}

.restart-btn {
  background-color: #22cd69;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}

.menu-btn {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
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
  background-color: #22cd69;
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
  box-shadow: 0 4px 8px rgba(46, 125, 50, 0.4);
  transition: background-color 0.3s ease;
}

.btn-continuar-centro:hover {
  background-color: #22cd69;
}

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
  box-shadow: 0 4px 8px rgba(46, 125, 50, 0.4);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-fijo-derecha:hover {
  background-color: #22cd69;
}


</style>
