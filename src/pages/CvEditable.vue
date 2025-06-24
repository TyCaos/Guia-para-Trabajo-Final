<template>
  <div class="cv-container">
    <div class="cv-box" ref="cvRef">
      <!-- Encabezado -->
      <div class="cv-header">
        <div
          class="cv-photo"
          @dragover.prevent
          @drop.prevent="onDrop"
          title="Arrastra una imagen para cambiar la foto"
        >
          <img :src="foto || defaultFoto" alt="Foto de perfil" />
        </div>
        <div class="cv-nombre">
          <input v-model="cv.nombre" placeholder="Nombre y Apellido" />
          <input v-model="cv.profesion" placeholder="Profesión" />
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="cv-grid">
        <!-- Columna izquierda -->
        <div class="cv-col-left">
          <h3>📞 Contacto</h3>
          <input v-model="cv.telefono" placeholder="Teléfono" />
          <input v-model="cv.email" placeholder="Correo" />
          <input v-model="cv.direccion" placeholder="Dirección" />

          <h3>🌐 Idiomas</h3>
          <textarea v-model="cv.idiomas" placeholder="Ej: Español, Inglés..." rows="3"></textarea>

          <h3>💡 Competencias</h3>
          <textarea v-model="cv.competencias" placeholder="Trabajo en equipo, liderazgo..." rows="4"></textarea>
        </div>

        <!-- Columna derecha -->
        <div class="cv-col-right">
          <h3>📍 Perfil</h3>
          <textarea v-model="cv.perfil" placeholder="Resumen de tu perfil..." rows="3"></textarea>

          <h3>🛠 Experiencia Laboral</h3>
          <textarea v-model="cv.experiencia" placeholder="Tus empleos previos, logros, etc." rows="4"></textarea>

          <h3>🎓 Formación Académica</h3>
          <textarea v-model="cv.formacion" placeholder="Instituciones, títulos..." rows="3"></textarea>

          <h3>📚 Formación Complementaria</h3>
          <textarea v-model="cv.complementaria" placeholder="Cursos, talleres, seminarios..." rows="3"></textarea>
        </div>
      </div>
    </div>
    <button @click="exportarPDF" class="boton-exportar">
      📄 Descargar PDF
    </button>
  </div>
  <router-link to="/verde" class="fixed-button">
  Continuar
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
    <path d="M7 15l5-5-5-5v10z" />
  </svg>
</router-link>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let html2pdf

onMounted(async () => {
  if (!window.html2pdf) {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
    script.onload = () => {
      html2pdf = window.html2pdf
    }
    document.head.appendChild(script)
  } else {
    html2pdf = window.html2pdf
  }
})

const defaultFoto = '/amarillo/insertafoto.jpg'
const foto = ref(null)
const cvRef = ref(null)

function onDrop(e) {
  const file = e.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      foto.value = reader.result
    }
    reader.readAsDataURL(file)
  } else {
    alert('Por favor suelta una imagen válida (JPG, PNG, etc.)')
  }
}

function exportarPDF() {
  const elemento = cvRef.value
  if (html2pdf && elemento) {
    html2pdf()
      .set({
        margin: 0,
        filename: 'mi-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .from(elemento)
      .save()
  } else {
    alert('PDF aún no está listo, intenta en unos segundos.')
  }
}

const cv = ref({
  nombre: '',
  profesion: '',
  telefono: '',
  email: '',
  direccion: '',
  perfil: '',
  experiencia: '',
  formacion: '',
  complementaria: '',
  competencias: '',
  idiomas: ''
})
</script>

<style scoped>
.cv-container {
  background-color: var(--amarillo-super-claro);
  font-family: sans-serif;
  color: var(--texto-amarillo-cv);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.cv-box {
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  border: 1px solid var(--amarillo);
}

.cv-header {
  display: flex;
  align-items: center;
  background-color: var(--amarillo);
  padding: 20px;
}

.cv-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--amarillo);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}

.cv-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cv-nombre input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  display: block;
  color: var(--texto-amarillo-cv);
}

.cv-nombre input:first-child {
  font-size: 24px;
  font-weight: bold;
}

.cv-nombre input:last-child {
  font-style: italic;
  color: #78350f; 
  font-size: 18px;
}

.cv-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.cv-col-left {
  background-color: var(--amarillo-claro);
  padding: 24px;
  border-right: 1px solid var(--amarillo);
}

.cv-col-right {
  padding: 24px;
}

.cv-col-left h3,
.cv-col-right h3 {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
  color: var(--texto-amarillo-h3);
}

.cv-col-left input,
.cv-col-right textarea,
.cv-col-left textarea,
.cv-col-right input {
  width: 100%;
  background-color: var(--amarillo-super-claro);
  border: 1px solid var(--amarillo);
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 4px;
  resize: vertical;
  font-size: 0.95rem;
  color: var(--texto-amarillo-cv);
}

.boton-exportar {
  margin-top: 20px;
  background-color: var(--amarillo);
  color: var(--texto-amarillo-cv);
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.boton-exportar:hover {
  background-color: var(--amarillo-hover);
}

.fixed-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--amarillo-hover); 
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: background-color 0.2s ease;
}
.fixed-button:hover {
  background-color: var(--amarillo-hover);
}
.fixed-button svg {
  margin-left: 0.5rem;
}

</style>