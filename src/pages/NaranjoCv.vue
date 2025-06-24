<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function irAAmarillo() {
  router.push('/amarillo');
}
const currentIndex = ref(0);

const slides = [
  {
    title: '¿Qué busca un ATS?',
    subtitle: 'Para que no lo descarten, tu currículum debe tener',
    items: [
      'Palabras clave: Incluye términos que aparezcan en la oferta laboral, como tecnologías, habilidades y herramientas específicas.',
      'Formato simple: Usá un diseño limpio, sin columnas ni gráficos. Lo mejor: .docx o PDF sencillo.',
      'Secciones claras: Organizá tu CV con títulos clásicos como: Experiencia – Educación – Habilidades.',
      'Datos concretos: Muestra logros medibles. Ejemplo:"Automaticé pruebas y reduje errores en un 30%.".',
    ],
  },
  {
    title: '¿Qué evitar para no quedar fuera?',
    subtitle: 'Para que no lo descarten, tu currículum debe tener',
    items: [
      'Tablas, gráficos y columnas múltiples: Muchos ATS no pueden leer contenido dentro de tablas o múltiples columnas correctamente.',
      'Ortografía y redacción informal: Errores gramaticales o un lenguaje poco profesional pueden perjudicar tu candidatura.',
      'Incluir información irrelevante: Como hobbies, religión, estado civil o número de documento.',
      'Uso excesivo de abreviaturas: Mejor escribe los términos completos para asegurar que el sistema los detecte.',
    ],
  },
  {
    title: 'Tips para que tu CV sea “amigable con ATS”',
    subtitle: '',
    items: [
      'Usá palabras clave del anuncio de trabajo: Leé bien la oferta y asegurate de incluir los términos específicos (habilidades, tecnologías, títulos de puesto) que aparecen en ella.',
      'Evitá emojis o caracteres especiales: Aunque parezcan decorativos, pueden romper la lectura del ATS o aparecer como símbolos extraños.',
      'No ocultes texto para “engañar” al ATS: Algunos candidatos intentan incluir palabras clave en blanco para ser detectados, pero esto puede jugar en contra si el sistema lo penaliza.',
    ],
  },
];

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
}

function goToSlide(index: number) {
  currentIndex.value = index;
}

const faqs = [
  {
    title: 'Foto profesional (¿sí o no?)',
    content: `
      <p><strong>Depende del área:</strong><br>
      ✔️ <em>Sí se recomienda:</em> atención al cliente, marketing, educación.<br>
      ❌ <em>No es necesaria:</em> tecnología, ciencia, industria.<br>
      Una foto profesional con fondo neutro suma en áreas visuales.</p>
      <p><strong>Recomendaciones:</strong></p>
      <p><strong>Vestimenta profesional adecuada al sector:</strong><br>Por ejemplo: camisa para áreas formales, estilo casual prolijo para startups o creatividad.</p><br>
      <strong>Evitar selfies, filtros o fondos llamativos:</strong><br>No usar fotos de redes sociales o recortes informales</br>
      <p><strong>Consejo Extra:</strong> Si decidís no incluirla, asegurate de que tu CV sea lo suficientemente fuerte en contenido como para causar buena impresión sin imagen</p>
    `,
  },
  {
    title: 'Perfil profesional adaptado',
    content: `
      <p><strong>Incluye un resumen breve:</strong><br>
      ✔️ Quién eres<br>
      ✔️ Qué hacés<br>
      ✔️ Qué buscas<br>
      ✔️ Qué valor aportás<br>
      Es tu carta de presentación, ¡personalizalo!</p>
      <p><strong>Sé breve pero impactante (3 a 5 líneas)</strong><br>Ejemplo: Desarrolladora backend con experiencia en Java y bases de datos. Apasionada por escribir código limpio y soluciones eficientes. Busco aportar mis conocimientos en un equipo ágil y en crecimiento</p><br>
      <strong>Incluye logros concretos si puedes</strong><br>Ej: “+2 años de experiencia en proyectos con clientes reales” o “Participación destacada en proyecto final con impacto social”</b>
    `,
  },
  {
    title: 'Palabras clave y habilidades',
    content: `
      <p><strong>Usá términos del anuncio de empleo:</strong><br>
      - <em>Ejemplo tech:</em> Java, Spring Boot, Scrum<br>
      - <em>Ejemplo salud:</em> trato humano, bioseguridad<br>
      Así pasás filtros automáticos (ATS).</p>
      <p><strong>Separar habilidades duras y blandas.</strong></p>
      <p><strong>Duras (tech):</strong> Python, SQL, Docker</p>
      <p><strong>Blandas:</strong> trabajo en equipo, proactividad, adaptabilidad</p>
      <p><strong>Evitá listar habilidades que no puedes demostrar</strong></p>
      <p><em>Siempre respaldá con experiencias o ejemplos</em></p>
    `,
  },
  {
    title: 'Diseño limpio y formato correcto',
    content: `
      <p><strong>Según el rubro:</strong><br>
      ✔️ Creatividad: color y estilo moderado<br>
      ✔️ Formal: diseño simple y estructurado<br>
      Guardalo siempre en PDF, ¡sin tablas ni gráficos decorativos!</p>
      <p><strong>Tamaño de fuente legible: </strong>entre 10 y 12 pt. Títulos entre 14 y 16 pt para destacar.</p>
      <p><strong>Uso correcto del espacio en blanco</strong><br>No sobrecargar el CV. Mejor una hoja bien organizada que dos con exceso de información</p>
      <p><strong>Consejo pro:</strong> <em>No uses encabezados o pies de página para información clave. Algunos ATS no los leen.</em></p>
    `,
  },
  {
    title: 'Datos personales básicos',
    content: `
      <p><strong>Incluye:</strong><br>
      ✔️ Nombre completo<br>
      ✔️ Email y teléfono<br>
      ✔️ Ciudad o zona (opcional)<br>
      ✔️ LinkedIn o portafolio<br>
      Evitá datos irrelevantes como estado civil o DNI.</p>
      <p><strong>Incluye enlaces clicables</strong><br>Como LinkedIn o portafolio web. En PDF, usá hipervínculos.</p>
      <p><strong>Ciudad o zona puede ayudar para búsquedas locales</strong><br><em>Ej: “Madrid, España” o “Remoto –España”</em></p><br>
      <strong>Consejo extra:</strong> Creá una dirección de email profesional.<br><em>Ej: nombre.apellido@gmail.com, no lokitah123@...</em></p>
    `,
  },
];

const activeFaq = ref<number | null>(null);

function toggleFaq(index: number) {
  if (activeFaq.value === index) activeFaq.value = null;
  else activeFaq.value = index;

nextTick(() => {
  const el = document.getElementById('faq-' + index);
  if (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      const yOffset = -80;
      const y = window.pageYOffset + rect.top + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
});

}


</script>

<template>
  <div>
    <header class="header barra-naranja">
      <div class="titulo">
        <h1>¿Como hacer un CV que hable bien de ti?</h1>
      </div>
      <div class="containerBlanco">
        <h5>Aprende que debe ir en tu CV y como agregarlo</h5>
      </div>
    </header>

    <main>
      <section class="seccionCv">
        <h2 class="tituloPrincipalCv">Antes de armar tu CV</h2>

        <div class="contenedorGeneral">
          <div class="columnaIzquierda">
            <div class="tarjetaCv">
              <div class="tituloTarjeta">¿Qué es el CV y por qué es importante?</div>
              <div class="contenidoTexto">
                <p>
                  El CV (Currículum Vitae) es una herramienta clave para presentarte profesionalmente. Es un documento que resume tu formación,
                  experiencia laboral, habilidades y logros, y que sirve para que empleadores y reclutadores te conozcan en pocos segundos. Un
                  buen CV no solo abre puertas, sino que puede marcar la diferencia entre ser llamado o no a una entrevista.
                </p>
              </div>
            </div>

            <div class="tarjetaCv">
              <div class="tituloTarjeta">¿Qué dice tu CV sobre ti?</div>
              <div class="contenidoTexto">
                <p>Aunque no te des cuenta, tu CV habla por vos antes de que digas una palabra.</p>
                <ul class="listaColor">
                  <li>Dice si eres ordenado/a, según cómo está estructurado.</li>
                  <li>Muestra tu personalidad a través del lenguaje y el diseño.</li>
                  <li>Refleja tu motivación por buscar trabajo o crecer profesionalmente.</li>
                  <li>Demuestra tu atención al detalle con la ortografía, gramática y formato.</li>
                </ul>
                <p>En resumen, tu CV es tu carta de presentación: debe ser clara, profesional y adaptada al puesto que quieres.</p>
              </div>
            </div>
          </div>

          <div class="columnaDerecha">
            <img src="/naranja/img1.png" alt="Imagen decorativa" class="imagenCv" />
          </div>
        </div>
      </section>

      <section>
        <div class="tituloEst">
          <h3>Informacion que no puede faltar en tu CV</h3>
        </div>
        <div class="containerEst">
          <div class="containerAim">
            <div class="acordeon">
              <div
                v-for="(faq, i) in faqs"
                :key="i"
                class="faq"
                :id="'faq-' + i"
              >
                <div
                  class="pregunta"
                  role="button"
                  tabindex="0"
                  @click="toggleFaq(i)"
                  @keyup.enter="toggleFaq(i)"
                  :aria-expanded="activeFaq === i ? 'true' : 'false'"
                >
                  <h4>{{ faq.title }}</h4>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 42 25"
                    :style="{
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }"
                  >
                    <path
                      d="M3 3L21 21L39 3"
                      stroke="orange"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <transition name="slide-fade">
                  <div
                    v-show="activeFaq === i"
                    class="respuesta contenidoTexto"
                    v-html="faq.content"
                  ></div>
                </transition>
              </div>
            </div>

            <div class="imgEst">
              <img src="/naranja/cvdudas.png" alt="Imagen de estructura y secciones de cv" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 id="sabiasQue">Datos que debes tomar en cuenta al enviar tu CV</h3>
        <div class="containerAts">
          <div class="queEs">
            <div class="parteSuperior">
              <img
                class="robotAts"
                src="/naranja/robotAts.png"
                alt="Robot escaneando a persona y su cv"
              />
            </div>
            <div class="parteInferior">
              <div class="tituloAts">
                <h5>¿Qué es un ATS?</h5>
              </div>
              <p class="descripcionAts">
                Un ATS (Applicant Tracking System) es un software que utilizan las empresas para filtrar currículums antes de que los vea una persona.
              </p>
              <div class="advertencia">
                <p>Tu currículum no solo tiene que estar bien hecho para humanos… ¡también para máquinas!</p>
              </div>
            </div>
          </div>

          <div class="atsCarrusel">
            <button
              class="arrow prev"
              @click="prevSlide"
              aria-label="Anterior slide"
              type="button"
            >
              ❮
            </button>

            <div class="carruselInterno" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div
                v-for="(slide, i) in slides"
                :key="i"
                class="slide"
                role="tabpanel"
                :aria-hidden="currentIndex !== i"
                :tabindex="currentIndex === i ? 0 : -1"
              >
                <h5>{{ slide.title }}</h5>
                <p id="subtitulo">{{ slide.subtitle }}</p>
                <ul class="listaColor">
                  <li v-for="(item, idx) in slide.items" :key="idx">{{ item }}</li>
                </ul>
              </div>
            </div>

            <button
              class="arrow next"
              @click="nextSlide"
              aria-label="Siguiente slide"
              type="button"
            >
              ❯
            </button>
<div class="fecha-buttons" role="tablist" aria-label="Seleccionar slide">
  <button
    v-for="(_, i) in slides"
    :key="'fecha-btn-' + i"
    class="fecha-btn"
    :class="{ active: currentIndex === i }"
    @click="goToSlide(i)"
    type="button"
    :aria-selected="currentIndex === i"
    :tabindex="currentIndex === i ? 0 : -1"
  >
    {{ (i + 1).toString().padStart(2, '0') }}
  </button>
</div>

          </div>
        </div>
      </section>
    </main>
  </div>
  <router-link to="/naranjo" class="volver-btn">← Volver atrás</router-link>
  <button class="btn-continuar-amarillo" @click="irAAmarillo">Continuar →</button>

</template>

<style scoped>
body {
  background-color: var(--fondo-claro);
  color: var(--texto-normal);
}
/* Barra naranja arriba */
.barra-naranja {
  background-color: var(--naranja);
  padding: 1rem 0.5rem;
    color: white;
  box-shadow: 0 4px 8px rgb(245 147 30 / 0.3);
  font-family: 'Poppins', sans-serif;
}

.header {
  text-align: center;
}

.header .titulo h1 {
  color: white;
  font-weight: 700;
  font-size: 2.4rem;
  margin: 0 auto;
  text-align: center;
}

.header .containerBlanco h5 {
  color: var(--texto-normal);
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 0.25rem;
  text-align: center;
}



/* Seccion Antes de armar tu CV */
.seccionCv {
  margin-bottom: 3rem;
}

.tituloPrincipalCv {
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--naranja-texto) !important;
  font-family: 'Poppins', sans-serif;
}

.contenedorGeneral {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.columnaIzquierda {
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tarjetaCv {
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: var(--fondo-claro);
  color: var(--texto-normal);
  cursor: default;
}

.tituloTarjeta {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  color: var(--naranja-texto) !important;
}

.contenidoTexto {
  font-weight: 400;
  font-size: 1rem;
  color: var(--texto-normal);
  line-height: 1.5;
}

.contenidoTexto ul {
  padding-left: 1.2rem;
}

.listaColor li {
  color: var(--naranja-texto) !important;
  margin-bottom: 0.4rem;
}

/* Imagen lado derecho */
.columnaDerecha {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagenCv {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* Acordeón FAQ */
.tituloEst {
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  color: var(--naranja-texto) !important;
}

.containerEst {
  background-color: var(--fondo-claro);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(245, 147, 30, 0.25);
  max-width: 1100px;
  margin: 0 auto;
}

.containerAim {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: flex-start;
  min-height: 450px;
}

.acordeon {
  flex: 1 1 600px;
  min-width: 450px
}

.pregunta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0;
  font-family: 'Poppins', sans-serif;
  color: var(--naranja-texto) !important;
}

.pregunta:hover {
  color: var(--naranja-hover);
}

.respuesta {
  overflow: hidden;
  padding-top: 0.6rem;
  font-family: 'Open Sans', sans-serif;
  color: var(--texto-normal);
}

/* Animación slide fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 600px;
  opacity: 1;
  padding-top: 0.6rem;
}

/* Imagen dentro acordeón */
.imgEst img {
  max-width: 100%;
  width: 320px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 2px 5px rgba(245, 147, 30, 0.3);
}

/* Carrusel ATS */
.containerAts {
  margin-top: 3rem;
}

.queEs {
  display: flex;
  gap: 2rem;
  background-color: var(--fondo-claro);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(245, 147, 30, 0.25);
  margin-bottom: 2rem;
  font-family: 'Open Sans', sans-serif;
  color: var(--texto-normal);
}

.parteSuperior img.robotAts {
  max-width: 150px;
  height: auto;
  object-fit: contain;
}

.parteInferior {
  flex: 1;
}

.tituloAts h5 {
  color: var(--naranja-texto) !important;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.descripcionAts {
  font-weight: 400;
  font-size: 1rem;
  color: var(--texto-normal);
}

.advertencia p {
  color: var(--naranja-texto) !important;
  font-weight: 600;
  margin-top: 1rem;
}

/* Carrusel interno */
.atsCarrusel {
  position: relative;
  background-color: var(--fondo-claro);
  border-radius: 12px;
  padding: 2rem 4rem; 
  box-shadow: 0 2px 10px rgba(245, 147, 30, 0.25);
  max-width: 1000px;
  margin: 0 auto;
  user-select: none;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
}

.carruselInterno {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  position: relative;
}

.slide {
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 2rem 4rem; 
  color: var(--texto-normal);
  text-align: center; 
}

.slide h5 {
  color: var(--naranja-texto) !important;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.slide ul {
  padding-left: 1.2rem;
  color: var(--texto-normal);
}

.slide ul li {
  margin-bottom: 0.5rem;
}

/* Botones de flechas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  font-weight: 700;
  background-color: var(--fondo-blanco);
  color: var(--naranja); 
  padding: 0.3rem 0.5rem;
  border-radius: 50%; 
  box-shadow: 0 2px 6px #f5931e; 
  z-index: 2;
}

.arrow:hover {
  background-color: var(--naranja);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}
/* Botones de fechas */
.fecha-buttons {
  margin-top: 1rem;
  text-align: center;
}

.fecha-btn {
  background: transparent;
  border: 2px solid var(--naranja);
  color: var(--naranja-texto) !important;
  font-weight: 700;
  margin: 0 0.25rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fecha-btn.active,
.fecha-btn:hover {
  background-color: var(--naranja);
  color: white;
}

/* Responsive */
@media (max-width: 800px) {
  .contenedorGeneral {
    flex-direction: column;
    align-items: center;
  }

  .columnaIzquierda,
  .columnaDerecha {
    flex: unset;
    width: 100%;
  }

  .imagenCv {
    max-width: 80%;
    margin: 0 auto;
    display: block;
  }

  .containerAim {
    flex-direction: column;
    align-items: center;
  }

  .acordeon {
    width: 100%;
  }

  .imgEst img {
    max-width: 90vw;
  }

  .atsCarrusel {
    max-width: 100%;
  }

  .carruselInterno,
  .slide {
    min-width: 100% !important;
    width: 100% !important;
  }
}
main {
  padding: 0 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.volver-btn {
  display: block;
  width: fit-content;
  margin: 2rem auto;
  padding: 0.7rem 1.4rem;
  background-color: white;
  color: var(--naranja);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(245, 147, 30, 0.25);
}

.volver-btn:hover {
  background-color: var(--naranja);
}

.btn-continuar-amarillo {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: white;
  color: var(--naranja);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(245, 147, 30, 0.3);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 100;
}

.btn-continuar-amarillo:hover {
  background-color: var(--naranja);
  color: white;
}

</style>
