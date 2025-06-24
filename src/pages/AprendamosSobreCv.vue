<template>
  <div class="pagina-cv-info">
    <h2 class="titulo">Aprendamos sobre el CV</h2>
    <p class="subtitulo">Haz clic en las secciones para conocer más sobre cada parte del CV.</p>

    <div class="contenedor-cv">
      <!-- Imagen del CV de muestra -->
      <img src="/amarillo/cv-muestra.png" alt="CV de muestra" class="cv-imagen" />

      <!-- Botones interactivos con info -->
      <button
        v-for="(seccion, index) in secciones"
        :key="index"
        class="info-boton"
        :style="{ top: seccion.top + 'px', left: seccion.left + 'px' }"
        @click="toggleTooltip(index)"
      >
        ℹ
        <div v-if="seccion.mostrar" class="tooltip">
          <strong>{{ seccion.titulo }}</strong>
          <p>{{ seccion.descripcion }}</p>
        </div>
      </button>
    </div>
  </div>
  <!-- Botón para avanzar -->
<button
  class="boton-avanzar"
  @click="irACvEditable"
>
  Siguiente ➡
</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Cada sección del CV explicada
const secciones = ref([
  // Columna izquierda
  {
    titulo: 'Foto',
    descripcion: 'Una imagen profesional ayuda a personalizar tu CV y generar conexión inmediata.',
    top: 40,
    left: 5,
    mostrar: false
  },
  {
    titulo: 'Contacto',
    descripcion: 'Información clave para que puedan comunicarse contigo fácilmente.',
    top: 168,
    left: 5,
    mostrar: false
  },
  {
    titulo: 'Idiomas',
    descripcion: 'Incluye los idiomas que dominas y el nivel de cada uno.',
    top: 348,
    left: 5,
    mostrar: false
  },
  {
    titulo: 'Competencias',
    descripcion: 'Destaca tus habilidades técnicas y transversales más relevantes.',
    top: 480,
    left: 5,
    mostrar: false
  },

  // Columna derecha
  {
    titulo: 'Nombre y Profesión',
    descripcion: 'Debe ir visible al principio del CV para identificar fácilmente al candidato.',
    top: 60,
    left: 647,
    mostrar: false
  },
  {
    titulo: 'Perfil',
    descripcion: 'Breve síntesis de tus habilidades, logros y expectativas profesionales.',
    top: 170,
    left: 647,
    mostrar: false
  },
  {
    titulo: 'Experiencia Laboral',
    descripcion: 'Explica tus empleos previos, logros y habilidades desarrolladas en el campo.',
    top: 315,
    left: 647,
    mostrar: false
  },
  {
    titulo: 'Formación Académica',
    descripcion: 'Muestra tu preparación formal, títulos obtenidos y tu recorrido educativo.',
    top: 465,
    left: 647,
    mostrar: false
  },
  {
    titulo: 'Formación Complementaria',
    descripcion: 'Cursos, carnets profesionales o jornadas que complementen tu perfil.',
    top: 620,
    left: 647,
    mostrar: false
  }
])




// Muestra/oculta la descripción
function toggleTooltip(index: number) {
  secciones.value[index].mostrar = !secciones.value[index].mostrar
}
import { useRouter } from 'vue-router'

const router = useRouter()

function irACvEditable() {
  router.push({ name: 'cv-editable' })
}

</script>

<style scoped>
.pagina-cv-info {
  background-color: var(--fondo-cv);
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: var(--texto-amarillo-cv);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--titulo-color);
}

.subtitulo {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--texto-amarillo-cv);
}

.contenedor-cv {
  position: relative;
  max-width: 700px;
}

.cv-imagen {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.info-boton {
  position: absolute;
  background-color: var(--amarillo);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: var(--amarillo-text);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: 35px;
  left: 40px;
  width: 220px;
  background-color: var(--amarillo-super-claro);
  border: 1px solid var(--amarillo);
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  color: var(--texto-amarillo-cv);
}

.tooltip p {
  margin: 0;
  font-size: 0.9rem;
}

.boton-avanzar {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--amarillo);
  color: var(--amarillo-text);
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton-avanzar:hover {
  background-color: var(--amarillo-hover);
}


</style>
