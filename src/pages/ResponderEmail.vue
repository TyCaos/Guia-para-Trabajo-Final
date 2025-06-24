<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Cómo responder a un gmail corporativo</h1>
      <p class="subtext">Los tips están escondidos... ¡haz clic para revelarlos!</p>
    </header>

    <main class="content">
      <div class="email-container">
        <img
          class="email-image"
          src="https://i.imgur.com/VXpGni3.png"
          alt="Captura de pantalla ejemplo de correo corporativo con asunto y texto formal"
        />

        <!-- Botones con tips -->
        <button
          v-for="(tip, index) in tips"
          :key="'btn-'+index"
          class="tip-button"
          :class="tip.position"
          @click="toggleTip(index)"
          :aria-expanded="tip.visible.toString()"
          :aria-controls="'tip-' + index"
          :aria-label="'Mostrar/Ocultar tip ' + (index + 1)"
          type="button"
        >
          <span class="material-icons">+</span>
        </button>
      </div>

      <section class="tips-container">
        <article
          v-for="(tip, index) in tips"
          :key="'tip-'+index"
          v-show="tip.visible"
          class="tip"
          :id="'tip-' + index"
          tabindex="0"
          role="region"
          :aria-label="'Tip para responder correo corporativo ' + (index + 1)"
        >
          <h3>Tip {{ index + 1 }}</h3>
          <p>{{ tip.text }}</p>
        </article>
      </section>

      <!-- Botón para avanzar a email generador -->
      <router-link to="/email-generador" class="btn-continuar">
        Continuar: redactar mi correo ✍️
      </router-link>
    </main>

    <footer class="app-footer">
      <p>© 2024 Empresa XYZ - Todos los derechos reservados</p>
    </footer>
  </div>
  <button class="volver-btn" @click="volverCeleste">← Volver atrás</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const volverCeleste = () => {
  router.push('/actividad-celeste')
}

// Lógica de los tips
import { reactive } from 'vue'

const tips = reactive([
  {
    text: "Usa un saludo formal dirigido a la persona específica, como 'Estimado Sr. Pérez'.",
    visible: false,
    position: "left-top",
  },
  {
    text: "Expresa claramente tu interés y el motivo de tu correo, de forma breve y profesional.",
    visible: false,
    position: "left-middle",
  },
  {
    text: "Agradece la oportunidad y menciona brevemente tus habilidades o experiencia relevante.",
    visible: false,
    position: "right-middle",
  },
])

const toggleTip = (index) => {
  tips[index].visible = !tips[index].visible
}
</script>


<style scoped>
:root {
  --color-bg: #b3e5fc;
  --color-text: #007c91;
  --color-text-light: #0097a7;
  --color-button-bg: #00acc1;
  --color-button-hover: #0097a7;
  --max-content-width: 960px;
  --spacing: 16px;
  --border-radius: 12px;
  --font-family: 'Poppins', sans-serif;
}

* {
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text-blue);
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing);
  padding-top: 40px;
  padding-bottom: 40px;
}

.app-header {
  text-align: center;
  max-width: var(--max-content-width);
  padding: 0 var(--spacing);
  margin-bottom: 48px;
  user-select: none;
}

.app-header h1 {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-text-blue);
}

.content {
  width: 100%;
  max-width: var(--max-content-width);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.email-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-bottom: 48px;
}

.email-image {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.4);
  user-select: none;
}

.tip-button {
  position: absolute;
  background-color: #4dd0e1;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  box-shadow:
    0 0 6px 2px rgba(0, 172, 193, 0.6),
    0 0 12px 3px rgba(0, 188, 212, 0.4);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  user-select: none;
}

.tip-button:hover,
.tip-button:focus {
  background-color: #00acc1;
  outline: none;
  transform: scale(1.2);
  box-shadow:
    0 0 10px 3px rgba(0, 150, 170, 0.9),
    0 0 18px 6px rgba(0, 188, 212, 0.8);
}

.tip-button:focus-visible {
  outline: 3px solid var(--color-text-blue);
  outline-offset: 2px;
}

.tip-button.left-top {
  top: 15%;
  left: -28px;
}

.tip-button.left-middle {
  top: 45%;
  left: -28px;
}

.tip-button.right-middle {
  top: 45%;
  right: -28px;
}

.tips-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tip {
  background-color: #ffffff;
  border-left: 6px solid #26c6da;
  border-radius: var(--border-radius);
  padding: 16px 24px;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.2);
  color: #006064;
  font-size: 1rem;
  line-height: 1.5;
  user-select: text;
  outline-offset: 4px;
}

.tip h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 700;
  color: var(--color-text-blue);
  font-size: 1.125rem;
}

.btn-continuar {
  margin-top: 2rem;
  background-color: #26c8ee;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn-continuar:hover {
  background-color: #00acc1;
}

.app-footer {
  margin-top: auto;
  text-align: center;
  padding: 16px 16px;
  font-size: 0.9rem;
  color: var(--color-text-light);
  user-select: none;
}

@media (max-width: 767px) {
  .tip-button.left-top,
  .tip-button.left-middle,
  .tip-button.right-middle {
    left: -20px !important;
    right: auto !important;
    top: auto !important;
    bottom: 14%;
  }
  .tip-button.right-middle {
    left: auto !important;
    right: -20px !important;
    bottom: 26%;
  }

  .tips-container {
    padding: 0 var(--spacing);
  }
}

@media (min-width: 1440px) {
  .app-container {
    padding-left: 32px;
    padding-right: 32px;
  }

  .app-header .subtext {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--color-text-blue);
  font-weight: 500;
}
}
.volver-btn {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: #007c91;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  z-index: 10;
}

.volver-btn:hover {
  opacity: 0.8;
}
</style>