<template>
  <div class="app">
    <header class="header">
      <h1>¿Cómo escribir un email profesional?</h1>
    </header>

    <main class="main-content">
      <section class="tips-section card">
        <h2 class="section-title">
          <span class="title-label">Tips para un email formal y efectivo</span>
        </h2>
        <ul class="tips-list">
          <li>Sé breve y conciso en tu mensaje.</li>
          <li>Usa un saludo profesional como “Estimado/a”.</li>
          <li>Especifica claramente el motivo del correo en el primer párrafo.</li>
          <li>Evita errores ortográficos y revisa la redacción antes de enviarlo.</li>
        </ul>
        <p class="emphasis-text">
          Un mail bien escrito refleja profesionalismo y aumenta tus probabilidades de ser contratado.
        </p>
      </section>

      <section class="image-section">
        <img 
          src="https://i.postimg.cc/G3Wkh4WM/ab3515f3-90ce-4c4b-b518-a4b205e1b7ff.png" 
          alt="Ilustración email profesional"
          class="placeholder-image"
        />
      </section>

      <section class="advice-section card">
        <h2 class="section-title">
          <span class="title-label">Consejos a la hora de escribir</span>
        </h2>
        <ul class="advice-list">
          <li>Planifica lo que vas a decir antes de comenzar a escribir.</li>
          <li>Utiliza párrafos cortos para facilitar la lectura.</li>
          <li>Evita tecnicismos o jergas si el receptor no los entiende.</li>
          <li>Lee tu mensaje en voz alta antes de enviarlo para comprobar su claridad.</li>
        </ul>
      </section>
    </main>

    <div class="buttons">
      <button class="btn-avanzar" @click="irAResponder">➡ Cómo responder un correo</button>
      <button class="volver-btn" @click="volverCeleste">← Volver Atrás</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const volverCeleste = () => router.push('/celeste')
const irAResponder = () => router.push('/responder-email')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.app {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  padding: 1rem 1.5rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
  background-color: var(--bg-color);
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 1rem;
}

.main-content {
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
}

@media (min-width: 768px) {
  .main-content {
    grid-template-columns: 1fr 280px 1fr;
    align-items: start;
  }
}

.card {
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  border: 2px solid var(--card-border);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.section-title {
  margin-bottom: 1rem;
}

.title-label {
  background-color: #26c8ee;
  color: white;
  padding: 6px 16px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-block;
}

.tips-list,
.advice-list {
  list-style: disc inside;
  padding: 0;
  margin: 0;
  color: var(--card-text);
  line-height: 1.6;
}

.emphasis-text {
  margin-top: 1rem;
  font-weight: 700;
  color: var(--highlight-text);
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-image {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(38, 200, 238, 0.5);
}

.buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-avanzar {
  background-color: var(--card-bg);
  color: #26c8ee;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid var(--card-bg);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-avanzar:hover {
  background-color: #e0f7fa;
}

.volver-btn {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  z-index: 10;
}

.volver-btn:hover {
  opacity: 0.8;
}

h1 {
  color: var(--text-color-celeste);
}
</style>
