<template>
  <div class="pagina-amarilla">
    <div class="encabezado">
      <h2>¿Cuánto sabes de un CV?</h2>
      <p>Coloca cada uno de los elementos del CV donde creas que deben ir. Puedes soltarlos libremente en la hoja.</p>
      <button class="reset-btn" @click="reset">
        <span class="icon">🔄</span> Reiniciar
      </button>
    </div>

    <div class="cv-interactivo">
      <!-- Hoja editable -->
      <div class="hoja-cv" ref="dropArea">
        <p class="instruccion">Arrastra las imágenes y colócalas libremente</p>

        <div
          v-for="item in cvOrdenado"
          :key="item.uid"
          class="cv-item"
          :style="{ left: item.x + 'px', top: item.y + 'px' }"
          @mousedown="startDrag($event, item)"
        >
          <img :src="item.img" :alt="item.alt" />
          <button class="delete-btn" @click.stop="removeItem(item.uid)">❌</button>
        </div>
      </div>

      <!-- Lista de elementos a arrastrar -->
      <div class="zona-elementos">
        <div
          v-for="item in cvElementos"
          :key="item.id"
          class="cv-item"
          draggable="true"
          @dragstart="onDragStart($event, item)"
        >
          <img :src="item.img" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
  <RouterLink to="/aprendamos-cv" class="btn-avanzar">
  Siguiente parte <span class="icon">➡️</span>
</RouterLink>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CvItem {
  id: number
  label: string
  img: string
  alt: string
}

interface PositionedItem {
  uid: number
  img: string
  alt: string
  x: number
  y: number
}

const originalItems: CvItem[] = [
  { id: 1, label: 'Formación Complementaria', img: '/amarillo/formacionComplementaria.png', alt: 'Formación Complementaria' },
  { id: 2, label: 'Experiencia Laboral', img: '/amarillo/Experiencia.png', alt: 'Experiencia Laboral' },
  { id: 3, label: 'Contacto', img: '/amarillo/Contacto.jpg', alt: 'Contacto' },
  { id: 4, label: 'Formación Académica', img: '/amarillo/formacionAcademica.png', alt: 'Formación Académica' },
  { id: 5, label: 'Foto', img: '/amarillo/foto.png', alt: 'Foto' },
  { id: 6, label: 'Nombre y Apellido', img: '/amarillo/nombreYApellido.jpg', alt: 'Nombre y Apellido' },
  { id: 7, label: 'Habilidades', img: '/amarillo/habilidades.png', alt: 'Habilidades' },
  { id: 8, label: 'Idiomas', img: '/amarillo/idiomas.png', alt: 'Idiomas' },
  { id: 9, label: 'Tecnolgias', img: '/amarillo/tecnologia.png', alt: 'Tecnologias' },
  { id: 10, label: 'Objetivo Laboral', img: '/amarillo/objetivolaboral.jpg', alt: 'Objetivo Laboral' }
]

const cvElementos = ref<CvItem[]>([...originalItems])
const cvOrdenado = ref<PositionedItem[]>([])
const dropArea = ref<HTMLElement | null>(null)
const draggedItem = ref<CvItem | null>(null)
let uidCounter = 1

function onDragStart(event: DragEvent, item: CvItem) {
  draggedItem.value = item
}

function startDrag(event: MouseEvent, item: PositionedItem) {
  const offsetX = event.clientX - item.x
  const offsetY = event.clientY - item.y

  function onMouseMove(e: MouseEvent) {
    item.x = e.clientX - offsetX
    item.y = e.clientY - offsetY
  }

  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

onMounted(() => {
  dropArea.value?.addEventListener('dragover', (e) => e.preventDefault())

  dropArea.value?.addEventListener('drop', (e) => {
    e.preventDefault()
    if (!draggedItem.value || !dropArea.value) return

    const rect = dropArea.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cvOrdenado.value.push({
      uid: uidCounter++,
      img: draggedItem.value.img,
      alt: draggedItem.value.alt,
      x,
      y
    })

    cvElementos.value = cvElementos.value.filter(
      (el) => el.id !== draggedItem.value?.id
    )

    draggedItem.value = null
  })
})

function reset() {
  cvElementos.value = [...originalItems]
  cvOrdenado.value = []
  draggedItem.value = null
}

function removeItem(uid: number) {
  const index = cvOrdenado.value.findIndex(i => i.uid === uid)
  if (index !== -1) {
    const removed = cvOrdenado.value.splice(index, 1)[0]
    const original = originalItems.find(o => o.img === removed.img)
    if (original && !cvElementos.value.some(i => i.id === original.id)) {
      cvElementos.value.push(original)
    }
  }
}
</script>

<style scoped>
.pagina-amarilla {
  background-color: var(--amarillo);
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: var(--amarillo-text);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reset-btn {
  margin-top: 1rem;
  background-color: var(--amarillo);
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--amarillo-text);
}

.cv-interactivo {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
}

.hoja-cv {
  background: var(--fondo-blanco);
  width: 600px;
  height: 800px;
  position: relative;
  border: 2px dashed var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.instruccion {
  text-align: center;
  font-style: italic;
  margin-bottom: 1rem;
  user-select: none;
  color: var(--texto-normal);
}

.zona-elementos {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cv-item {
  position: absolute;
  cursor: grab;
  user-select: none;
}

.zona-elementos .cv-item {
  position: relative;
  cursor: grab;
}

.cv-item img {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  border-radius: 8px;
  user-select: none;
  pointer-events: none;
}

.delete-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--rojo);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.btn-avanzar {
  margin-top: 2rem;
  align-self: flex-end;
  background-color: var(--amarillo);
  border: none;
  padding: 0.6rem 1.4rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--amarillo-text);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}

.btn-avanzar:hover {
  background-color: var(--amarillo-hover);
}

</style>