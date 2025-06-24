<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const consejos = ref([
  {
    titulo: "Prepárate bien",
    descripcion: "Investiga sobre la empresa, el puesto y practica preguntas comunes.",
    img: "/img/consejo1.jpg",
    activo: true
  },
  {
    titulo: "Cuida tu vestimenta",
    descripcion: "Vístete de forma profesional y adecuada para el tipo de entrevista.",
    img: "/img/consejo2.jpg",
    activo: false
  },
  {
    titulo: "Llega a tiempo",
    descripcion: "La puntualidad es fundamental, llega unos minutos antes.",
    img: "/img/consejo3.jpg",
    activo: false
  },
  {
    titulo: "Sé tú mismo",
    descripcion: "Muestra confianza y autenticidad en tu entrevista.",
    img: "/img/consejo4.jpg",
    activo: false
  }
])


const imgMostrada = ref(consejos.value[0].img)

function mostrarDescripcion(index: number) {
  imgMostrada.value = consejos.value[index].img
  consejos.value.forEach((_, i) => {
    consejos.value[i].activo = i === index
  })
}

function irPreguntas() {
  router.push('/violeta-preguntas')
}
</script>

<template>
  <div class="fondo-violeta">
    <section class="bloque-blanco">
      <h2>Consejos para una entrevista exitosa</h2>

      <div class="consejos-lista">
        <div 
          v-for="(consejo, index) in consejos" 
          :key="index" 
          :class="['consejo-item', { activo: consejo.activo }]"
          @click="mostrarDescripcion(index)"
        >
          <h3>{{ consejo.titulo }}</h3>
          <p v-if="consejo.activo">{{ consejo.descripcion }}</p>
        </div>
      </div>

      <div class="imagen-consejo">
        <img :src="imgMostrada" alt="Imagen consejo" />
      </div>

      <button class="btn" @click="irPreguntas">Ir a Preguntas Frecuentes</button>
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

.consejos-lista {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.consejo-item {
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.consejo-item.activo h3 {
  color: var(--violeta);
}

.consejo-item p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: var(--violeta-parrafo);
}

.imagen-consejo {
  margin: 2rem 0;
  text-align: center;
}

.imagen-consejo img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--violeta);
}

.btn {
  background-color: var(--violeta);
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

.bloque-blanco h2 {
  font-size: 2.5rem;
  color: var(--violeta-titulo);
  font-weight: bold;
  margin-bottom: 1.5rem;
}


</style>