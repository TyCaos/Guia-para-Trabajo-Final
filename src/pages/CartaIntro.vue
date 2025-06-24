<template>
  <div class="color-bg">
    <RouterLink to="/verde" class="volver-btn">← Volver atrás</RouterLink>
    <div class="white-box">
      <h2>¿Qué es una carta de presentación?</h2>
      <p>
        Una carta de presentación es un documento formal que acompaña al currículum vitae al solicitar un empleo. Su objetivo principal es destacar las cualidades y experiencias más relevantes del candidato para el puesto específico, explicando por qué está interesado en la empresa y cómo sus habilidades pueden beneficiarla.
      </p>
      <h2>✦Tips✦</h2>
      <ul>
        <li>✦ Sé breve y conciso.</li>
        <li>✦ Personalízala para cada empresa.</li>
        <li>✦ Destaca tus habilidades.</li>
        <li>✦ Utiliza un tono profesional y positivo.</li>
        <li>✦ Revisa la ortografía y gramática.</li>
        <li>✦ Muestra entusiasmo por el puesto y la empresa.</li>
        <li>✦ Siempre agradece.</li>
        <li>✦ Cierra con una invitación al contacto.</li>
      </ul>

      <div class="button-group">
        <RouterLink to="/carta-editor" class="btn">Redacta tu carta</RouterLink>
        <RouterLink to="/carta-quiz" class="btn">Pon a prueba lo aprendido</RouterLink>
      </div>
    </div>
    <RouterLink to="/" class="menu-btn">← Volver al menú</RouterLink>
  </div>
</template>

<style scoped>
.color-bg {
  background-color: #22cd69;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;
}

/* caja adaptable a modo claro/oscuro */
.white-box {
  background-color: var(--editor-bg, white);
  color: var(--text-color, black);
  padding: 2rem 2.5rem;
  border-radius: 16px;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  text-align: left;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.white-box h2 {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #22cd69;
}

.white-box p,
.white-box ul {
  font-size: 1.1rem;
  line-height: 1.6;
}

.white-box ul {
  padding-left: 1.2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  background-color: #22cd69;
  color: white;
  padding: 0.9rem 1.7rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  background-color: #1ca95a;
  transform: translateY(-2px);
}

.menu-btn,
.volver-btn {
  position: absolute;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: underline;
  color: white;
  transition: opacity 0.3s ease;
}

.menu-btn {
  bottom: 1.5rem;
  left: 1.5rem;
}

.volver-btn {
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
}

.menu-btn:hover,
.volver-btn:hover {
  opacity: 0.8;
}
</style>
