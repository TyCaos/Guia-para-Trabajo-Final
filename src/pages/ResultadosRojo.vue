<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

function irANaranjo() {
  router.push('/naranjo');
}

const route = useRoute();
const router = useRouter();

const perfil = route.query.perfil as string;

const perfiles: Record<string, {
  nombre: string;
  descripcion: string;
  habilidades: string[];
  profesiones: string[];
}> = {
  analitico: {
    nombre: 'Perfil Analítico',
    descripcion: 'Eres una persona curiosa, lógica y observadora. Te gusta entender el porqué de las cosas y tomar decisiones basadas en datos.',
    habilidades: ['Pensamiento crítico', 'Atención al detalle', 'Resolución de problemas', 'Capacidad de análisis'],
    profesiones: ['Ingeniería', 'Economía', 'Analista de datos', 'Investigación científica']
  },
  organizador: {
    nombre: 'Perfil Organizador',
    descripcion: 'Eres metódico/a, confiable y eficiente. Disfrutás de poner orden, coordinar tareas y asegurar que todo funcione bien.',
    habilidades: ['Planificación', 'Gestíon del tiempo', 'Responsabilidad', 'Precisión'],
    profesiones: ['Administración', 'Logística', 'Project Manager', 'Contabilidad']
  },
  creativo: {
    nombre: 'Perfil Creativo',
    descripcion: 'Eres imaginativo/a, expresivo/a y original. Te gusta crear, innovar y encontrar nuevas formas de expresarte o resolver problemas.',
    habilidades: ['Pensamiento lateral', 'Sensibilidad estética', 'Innovación', 'Expresión artística'],
    profesiones: ['Diseño gráfico', 'Publicidad', 'Artes visuales', 'Producción audiovisual']
  },
  comunicador: {
    nombre: 'Perfil Comunicador',
    descripcion: 'Eres empático/a, sociable y con don de gentes. Disfrutás de conectar con otros, compartir ideas y trabajar en equipo.',
    habilidades: ['Empatía', 'Escucha activa', 'Oratoria', 'Trabajo en equipo'],
    profesiones: ['Recursos Humanos', 'Docencia', 'Psicología', 'Ventas']
  },
  practico: {
    nombre: 'Perfil Práctico',
    descripcion: 'Eres activo/a, concreto/a y resolutivo/a. Prefieres aprender haciendo, estar en movimiento y trabajar con las manos.',
    habilidades: ['Destreza manual', 'Autonomía', 'Resolución práctica', 'Adaptabilidad'],
    profesiones: ['Técnico mecánico', 'Electricista', 'Agricultura', 'Construcción']
  },
};

const resultado = computed(() => perfiles[perfil] || null);

function volverAIntentarlo() {
  router.push('/rojo');
}
</script>

<template>
  <div class="paginaRoja">
    <div class="resultado-container" v-if="resultado">
      <h2>{{ resultado.nombre }}</h2>
      <p class="descripcion">{{ resultado.descripcion }}</p>

      <div class="bloque">
        <h3>Habilidades blandas destacadas</h3>
        <ul>
          <li v-for="(hab, i) in resultado.habilidades" :key="i">{{ hab }}</li>
        </ul>
      </div>

      <div class="bloque">
        <h3>Profesiones recomendadas</h3>
        <ul>
          <li v-for="(prof, i) in resultado.profesiones" :key="i">{{ prof }}</li>
        </ul>
      </div>

      <button class="reiniciar" @click="volverAIntentarlo">⭯ Volver a intentarlo</button>
    </div>
    <div v-else class="error">
      <p>No se encontró un perfil válido. Por favor, vuelve a realizar el quiz.</p>
      <button class="reiniciar" @click="volverAIntentarlo">⭯ Volver</button>
    </div>
  </div>
  <button class="btn-continuar" @click="irANaranjo">Continuar →</button>

</template>

<style scoped>
.paginaRoja {
  background-color: var(--rojo);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.resultado-container {
  background: var(--rojo-container-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
}

h2 {
  color: var(--rojo-titulo);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.descripcion {
  color: var(--rojo-parrafo);
  margin-bottom: 2rem;
}

.bloque {
  margin-bottom: 1.5rem;
  text-align: left;
}

h3 {
  color: var(--rojo-titulo);
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.4rem;
  color: var(--rojo-lista);
}

.reiniciar {
  background: var(--rojo);
  color: var(--rojo-boton-texto);
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reiniciar:hover {
  background: var(--rojo-hover);
}

.error {
  text-align: center;
  background: var(--rojo-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: var(--rojo-parrafo);
}

.btn-continuar {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: var(--rojo-boton);
  color: var(--rojo-boton-texto-con);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 100;
}

.btn-continuar:hover {
  background: var(--rojo-hover);
  color: white;
}


</style>