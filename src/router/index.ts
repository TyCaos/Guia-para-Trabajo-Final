import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Página principal
import MenuPrincipal from '../components/MenuPrincipal.vue'

// Páginas de colores
import RojoPage from '../pages/RojoPage.vue'
import NaranjoPage from '../pages/NaranjoPage.vue'
import AmarilloPage from '../pages/AmarilloPage.vue'
import VerdePage from '../pages/VerdePage.vue'
import CelestePage from '../pages/CelestePage.vue'
import AzulPage from '../pages/AzulPage.vue'
import VioletaPage from '../pages/VioletaPage.vue'

// Subpáginas Violeta
import VioletaConsejos from '../pages/VioletaConsejos.vue'
import VioletaPreguntas from '../pages/VioletaPreguntas.vue'

// Carta de Presentación
import CartaIntro from '../pages/CartaIntro.vue'
import CartaEditor from '../pages/CartaEditor.vue'
import CartaQuiz from '../pages/CartaQuiz.vue'

// Actividades específicas
import ConsejosVestimenta from '../pages/ConsejosVestimenta.vue'
import ConsejosEmail from '../pages/ConsejosEmail.vue'
import ResponderEmail from '../pages/ResponderEmail.vue'
import EmailGenerador from '../pages/EmailGenerador.vue'

// Nuevas subpáginas
import NaranjoCv from '../pages/NaranjoCv.vue'
import QuizRojo from '../pages/QuizRojo.vue'
import ResultadosRojo from '../pages/ResultadosRojo.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MenuPrincipal },

  // Colores principales
  { path: '/rojo', component: RojoPage },
  { path: '/naranjo', component: NaranjoPage },
  { path: '/amarillo', component: AmarilloPage },
  { path: '/verde', component: VerdePage },
  { path: '/celeste', component: CelestePage },
  { path: '/azul', component: AzulPage },
  { path: '/violeta', component: VioletaPage },

  // Subpáginas y secciones
  { path: '/naranjo-cv', component: NaranjoCv },
  { path: '/violeta-consejos', component: VioletaConsejos },
  { path: '/violeta-preguntas', component: VioletaPreguntas },

  // Carta presentación
  { path: '/carta-intro', component: CartaIntro },
  { path: '/carta-editor', component: CartaEditor },
  { path: '/carta-quiz', component: CartaQuiz },

  // Actividades adicionales
  { path: '/actividad-azul', component: ConsejosVestimenta },
  { path: '/actividad-celeste', component: ConsejosEmail },
  { path: '/responder-email', component: ResponderEmail },
  { path: '/email-generador', component: EmailGenerador },

  // Resultados rojo
  {
    path: '/quiz-rojo',
    name: 'quiz-rojo',
    component: QuizRojo
  },
  {
    path: '/resultados-rojo',
    name: 'resultados-rojo',
    component: ResultadosRojo,
    props: (route) => ({ perfil: route.query.perfil as string })
  },

  // Amarillo Orden del CV
  {
    path: '/amarillo-orden-cv',
    name: 'amarillo-orden-cv',
    component: () => import('../pages/AmarilloOrdenCv.vue')
  },

  // Amarillo Aprendamos sobre el CV
  {
  path: '/aprendamos-cv',
  name: 'aprendamos-cv',
  component: () => import('../pages/AprendamosSobreCv.vue') 
},
{
  path: '/cv-editable',
  name: 'cv-editable',
  component: () => import('../pages/CvEditable.vue') 
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
