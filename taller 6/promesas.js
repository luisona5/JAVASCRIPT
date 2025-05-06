/*
// difernetes maneras de enfrentarnos a un promesa
//1.  .then .catch
conexionBDDExterna(false)
    .then(r=>console.log(r))
    .catch((e=>console.log(e)))

//2. asyn -await
// es una funcion autoejecutada
 async function conexionBDDExternaMysql(){
    try {
        const response= await conexionBDDExterna(true)
        console.log("------->",response)
    } catch (error) {
        console.log(error)
    }
}
*/

//-------------------------------------------------------
const ObtenerProductos =fetch("https://fakestoreapi.com/products")

.then(r=>r.json())
.then(r=> console.log(`${r[0].title}-${r[0].price}`))
.then(e=>console.log(e))


async function ObtenerProductosAPITemnu() {
    try {
        const request = await fetch('https://fakestoreapi.com/products')
        const response = await request.json()  
        console.log(`${response[1].title}-${response[1].price}`)

     } catch (error) {
        console.log(error)
    }
    
}
ObtenerProductosAPITemnu()


// ------------------------------------------------------------------------------
// para comprobar este ejercicio toca ejecutar en el navegador 

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(r=>r.json())
    .then(data=> {

        let user={
            name:data.name,
            email: data.email
        }
        guardarLocalStorage(user)
    })
    .then(e=>console.log(e))

// me va a guardar la informacion en la base de datos 

const guardarLocalStorage =( data) => {

    localStorage.setItem('user',JSON.stringify(data))
}
    

//-----------------------------------------------------------------------------------------------
// EM MODULS: el modulo nos permite tener varios archivos para despues exportar o importar
// para una cosa

import login from "./autenticar.js"
login("Luis Oña","123456789")


// para varias cosas

import { login, likes} from './autenticar.js'

console.log(likes)
login(("jorge Oña","01234"))


