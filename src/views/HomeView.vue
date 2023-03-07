<template>
  <Navbar />
  <div class="texto">
    <h3>Regístrate o inicia sesión para poder tener acceso a la base de datos.</h3>
  </div>
  <br>
  <div class="out">
    <div class="section" v-if="existeUsuario">
      <router-link class="boton" aria-current="page" to="/data-base">Base de Datos</router-link>
    </div>
  </div>
  <br>
  <Slider />
  <br>
  <div class="outcont">
    <div class="contenedor">
      <h2>¿Qué es V-Users?</h2>
      <p>Esta página es una tarea que involucra el uso del framwork de <a target="_blank" href="https://vuejs.org/">Vue</a>, es gracias a este que es posible realizar este contenido.
         También se hace uso de una herramienta llamada <a target="_blank" href="https://firebase.google.com/?hl=es">Firebase</a> lo que nos permite realizar la autentificación de esta página y el almacenamiento de la base de datos.</p>
    </div>
  </div>
  <br>
  <div class="outcont">
    <div class="contenedor">
      <figure class="text-center">
        <blockquote class="blockquote">
          <p class="mb-0">El conocimiento no es algo separado y que se baste a sí mismo, sino que está envuelto en el proceso por el cual la vida se sostiene y se desenvuelve. Integer posuere erat a ante.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          John Dewey <cite title="Source Title">1859-1952</cite>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Slider from '../components/Slider.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Slider
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  }
}
</script>

<style scoped>

.texto {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background-color: #045;
}
.texto h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  color: azure;
}
.out {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkcyan;
  min-height: 90px;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005;
  text-decoration: none;
  max-width: 300px;
  max-height: 70px;
  border-radius: 3px;
}
.section a {
  padding: 20px;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  color: azure;
  text-decoration: none;
}
.outcont {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1.5px solid #ccc;
  background-color: #efefef;
  border-radius: 7px;
  padding: 30px;
}
.contenedor * {
  max-width: 1000px;
}
</style>
