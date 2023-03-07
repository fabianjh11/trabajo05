<template>
    <Navbar />
    <div class="container">
      <div class="container my-4">
        <form>  
          <div class="input-group mb-3">
            <span class="input-group-text">Nombre</span>
            <input v-model="usuario.nombre" type="text" class="form-control">
          </div>
          <!-- Correo -->
          <div class="input-group mb-3">
            <span class="input-group-text">Correo</span>
            <input v-model="usuario.correo" type="text" class="form-control">
          </div>
          <!-- Boton Guardar -->
          <div class="mt-3">  
            <button @click.prevent="agregarDato()" class="btn btn-primary">Guardar</button>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">ID</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in usuarios" :key="index">
            <th scope="row">{{index}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.correo}}</td>
            <td>{{item.id}}</td>
            <td>
              <button @click.prevent="eliminarDato(item.id)" 
                class="btn btn-danger">Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { db } from "../main.js";


export default {
name: 'BaseDatos',
components: {
    Navbar
},
data() {
    return {
    usuarios: [],
    usuario: {
        nombre: '',
        correo: ''
    }
    }
},
methods:{
    // GET / OBTENER / Consulta instantánea 
    async obtenerDatos () { 
    const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
    });
    },
    // ADD / AGREGAR / AÑADIR
    async agregarDato(){
    const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: this.usuario.nombre,
        correo: this.usuario.correo
    })
        .then(() => {
        console.log("Documento añadido");
        })
        .catch(function(error) {
        console.error("Error al añadir el documento: ", error);
        });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato (id) {
    await deleteDoc(doc(db, "usuarios", id));
    },
},
mounted() {
  this.obtenerDatos();
},
}
</script>