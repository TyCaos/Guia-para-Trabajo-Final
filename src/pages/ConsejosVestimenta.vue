<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Estados para los selects y control de vista
const trabajo = ref('')
const situacion = ref('')
const mostrarResultados = ref(false)

const consejos = ref<string[]>([])
const errores = ref<string[]>([])

const router = useRouter()

const base: Record<string, Record<string, string[]>> = {
  oficina: {
    entrevista: [
      "Opta por camisa blanca y blazer oscuro.",
      "Zapatos cerrados de cuero pulido.",
      "Evita accesorios llamativos.",
      "Porte impecable: plancha todo antes."
    ],
    trabajo: [
      "Camisa o blusa de tonos neutros.",
      "Puedes prescindir del blazer si hace calor.",
      "Zapatos cómodos pero profesionales.",
      "Cuida tu aseo y presentación diaria."
    ]
  },
  construccion: {
    entrevista: [
      "Usa botas limpias y ropa resistente en buen estado.",
      "Evita jeans rotos o deshilachados.",
      "Luce organizado, incluso en entorno rudo.",
      "Si tienes casco propio, llévalo limpio."
    ],
    trabajo: [
      "Utiliza ropa resistente y cómoda.",
      "Lleva botas de seguridad si aplica.",
      "Evita prendas sueltas que puedan engancharse.",
      "Usa casco o protección si el entorno lo requiere."
    ]
  },
  salud: {
    entrevista: [
      "Usa ropa limpia y sobria: blanco, azul, gris.",
      "Evita perfumes fuertes.",
      "Zapatos cerrados y limpios.",
      "Muestra higiene y cuidado personal."
    ],
    trabajo: [
      "Utiliza bata o uniforme limpio.",
      "Ropa cómoda pero profesional.",
      "Evita colores estridentes.",
      "Zapatos cerrados antideslizantes."
    ]
  },
  atencion: {
    entrevista: [
      "Usa ropa formal o semi formal.",
      "Colores neutros y apariencia pulcra.",
      "Evita jeans o camisetas.",
      "Sonríe y mantente presentable."
    ],
    trabajo: [
      "Ropa limpia y planchada.",
      "Colores neutros como blanco, azul o gris.",
      "Evita jeans rotos o camisetas estampadas.",
      "Cuida tu higiene y presentación diaria."
    ]
  },
  tecnologia: {
    entrevista: [
      "Look casual profesional: jeans oscuros y camisa.",
      "Evita camisetas con logos.",
      "Limpia tus zapatillas antes de ir.",
      "Muestra cuidado, sin rigidez formal."
    ],
    trabajo: [
      "Jeans limpios, camisa o polo sobrio.",
      "Zapatillas discretas y limpias.",
      "No uses sudaderas o ropa deportiva.",
      "Tu estilo puede ser relajado, pero no descuidado."
    ]
  }
}

const erroresBase: string[] = [
  "Evita ropa arrugada o manchada.",
  "No uses prendas con mensajes ofensivos o logos grandes.",
  "Evita excesos de perfume o accesorios.",
  "No uses sandalias abiertas en entornos profesionales.",
  "Nunca subestimes la importancia de verte presentable."
]

function avanzar() {
  if (!trabajo.value || !situacion.value) {
    alert("Por favor selecciona ambas opciones.")
    return
  }
  consejos.value = base[trabajo.value]?.[situacion.value] || []
  errores.value = erroresBase
  mostrarResultados.value = true
}

function volver() {
  mostrarResultados.value = false
  trabajo.value = ''
  situacion.value = ''
}

function volverAzul() {
  router.push('/azul')
}
</script>

<template>
  <div class="consejos-container">
    <button @click="volverAzul" class="btn-volver-esquina">← Volver Atrás</button>

    <header>
      <h1>Consejos de Vestimenta Laboral</h1>
    </header>

    <main>
      <section v-if="!mostrarResultados" class="vista">
        <h2>¿A qué tipo de trabajo te diriges?</h2>
        <select v-model="trabajo">
          <option disabled value="">Selecciona una opción</option>
          <option value="oficina">Oficina</option>
          <option value="construccion">Construcción</option>
          <option value="salud">Salud</option>
          <option value="atencion">Atención al cliente</option>
          <option value="tecnologia">Tecnología</option>
        </select>

        <h2>¿Vas a una entrevista?</h2>
        <select v-model="situacion">
          <option disabled value="">Selecciona una opción</option>
          <option value="entrevista">Sí, quiero causar una buena primera impresión</option>
          <option value="trabajo">No, ya fui contratado y quiero vestirme acorde al contexto</option>
        </select>

        <button @click="avanzar" class="btn-avanzar">Avanzar</button>
      </section>

      <section v-else id="vista-resultados" class="vista-resultados">
        <div class="tarjeta">
          <h3>Consejos para {{ situacion === 'entrevista' ? 'tu entrevista' : 'tu día de trabajo' }}</h3>
          <ul>
            <li v-for="(consejo, i) in consejos" :key="i">{{ consejo }}</li>
          </ul>
          <img src="/personajes.png" alt="Personajes ilustrativos" class="imagen-personajes" />
        </div>

        <div class="tarjeta">
          <h3>Errores comunes que debes evitar</h3>
          <ul>
            <li v-for="(error, i) in errores" :key="i">{{ error }}</li>
          </ul>
        </div>
        <router-link to="/violeta" class="btn-fijo-derecha">
  Continuar →
</router-link>


        <button @click="volver" class="btn-volver-centro">Volver a probar</button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.consejos-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--color-bg);
  min-height: 100vh;
  padding: 2rem 1rem 6rem;
  color: var(--color-text-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: background-color 0.4s, color 0.4s;
}

header {
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.8rem;
  margin: 0;
  color: var(--color-text-blue);
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}

main {
  width: 100%;
  max-width: 800px;
}

.vista {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vista h2 {
  text-align: center;
  margin-bottom: 0.8rem;
  color: var(--color-text-blue);
  text-shadow: 0 0 4px rgba(0,0,0,0.2);
}

select {
  width: 100%;
  max-width: 450px;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  border: 1px solid var(--color-primary);
  background: #f7fbff;
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 600;
  box-shadow: inset 0 0 6px #cce6ff;
  transition: border-color 0.3s;
}

select:focus {
  outline: none;
  border-color: var(--color-button-hover);
  box-shadow: 0 0 8px var(--color-button-hover);
}

.btn-avanzar {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  width: 180px;
  margin-top: 1.5rem;
  font-weight: bold;
  transition: background-color 0.3s;
  box-shadow: 0 3px 8px rgba(21, 111, 229, 0.7);
}

.btn-avanzar:hover {
  background-color: var(--color-button-hover);
}

.vista-resultados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.tarjeta {
  background: var(--color-card);
  padding: 2rem;
  border-radius: 16px;
  max-width: 360px;
  flex: 1 1 360px;
  color: var(--color-text-bluet);
  box-sizing: border-box;
  box-shadow: 0 8px 20px rgba(21, 111, 229, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: background-color 0.4s, color 0.4s;
}

.tarjeta h3 {
  margin-top: 0;
  text-align: center;
  color: var(--color-primary);
  text-shadow: 0 0 3px rgba(21, 111, 229, 0.6);
  font-weight: 700;
}

ul {
  padding-left: 1.4rem;
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.5;
}

.imagen-personajes {
  width: 100%;
  max-width: 160px;
  align-self: center;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(21, 111, 229, 0.3);
}

.btn-volver-centro {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 3px 10px rgba(21, 111, 229, 0.7);
  transition: background-color 0.3s;
  margin: 2rem auto 0;
  display: block;
}

.btn-volver-centro:hover {
  background-color: var(--color-button-hover);
}

.btn-volver-esquina {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 3px 10px rgba(21, 111, 229, 0.7);
  transition: background-color 0.3s;
  z-index: 1000;
}

.btn-volver-esquina:hover {
  background-color: var(--color-button-hover);
}

.btn-volver-menu {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text-blue);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  z-index: 100;
  text-shadow: 0 0 4px rgba(0,0,0,0.5);
}

.btn-volver-menu:hover {
  opacity: 0.85;
}

.btn-fijo-derecha {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--color-button-hover);
  color: white;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(30, 66, 245, 0.25);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-fijo-derecha:hover {
  background-color: var(--color-primary);
}
</style>
