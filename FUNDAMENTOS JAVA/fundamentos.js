// lo que hicimos es declarar variables muteables (primitivos)

let cantidad= 127   // int
let modulo="Mis ordenes" //string
let status= true  // booleano

let TipoPago= "E"  //chart
let Precio = 105.00 //float

const CI= 1751095025 // int y es inmuteable

// tipos de datos compuestos
// objetos -arrays -

let ordenes=["balon","camniseta","zapatos"]  //array

// esto es un objeto
let detalleOrden = {
    id: 1,
    estado: "Activo",
    items : ["balon","camniseta","zapatos"],
    precio: 155.99
}

// esto es un json
let detalleOrdenJSON = {
    "id": "1",
    "estado" : "Activo",
    "items" : ["balon","camniseta","zapatos"],
    "precio": "155.99"
}

// --------------STRINGS-------
let nombreCompleto="Luis Oña"
nombreCompleto.lenght // longitud
nombreCompleto.toUpperCase() // Mayusculas
nombreCompleto.toLowerCase() // Minusculas
nombreCompleto.trim()      // eliminar espacios en blanco
nombreCompleto.charAt(0)   // obtiene el primer caracter
nombreCompleto.includes("Lusi") // verifica si existe el texto


console.log(nombreCompleto.length)
console.log(nombreCompleto.toUpperCase())
console.log(nombreCompleto.toLowerCase())
console.log(nombreCompleto.trim())
console.log(nombreCompleto.charAt(0))
console.log(nombreCompleto.includes("lusi"))

console.log(`mi nombre es ${nombreCompleto} y tengo ${nombreCompleto.length} caracteres`)




//--------------NUMEROS-----------------
let cuotas ="6"
console.log(cuotas +3)

// convertir un string a un numero  ES6

console.log(+cuotas+3)

// PARA VERIFIFCAR EL TIPO DE DATO
console.log(typeof(cuotas))

// ORDEN DE PRESEDENCIA
console.log(4*3**2) // PRIMERO resuelve la potenciacion



// booleans

let saldoUsuario=1000
let saldoTarjeta="1000"

console.log(saldoTarjeta==saldoUsuario) // comparacion de valor

// ES6 comparacion estricta
// comparacion de valor y comparacion de dato

console.log(saldoTarjeta === saldoUsuario)

// condicionales

const carritoCompras=[]
if(carritoCompras.length ===1){
    console.log("el carrito esta vacio")
}
else{
    console.log("el carrito de comprtas tiene productos")
}


// ES6- operador ternario

const mensaje = carritoCompras.length === 1? "el carrito vacio":"el carrito de comprtas tiene productos"



// estruras de desicion multiple
'use strict'

const compras = 2

switch (compras) {
    case 1:
        console.log("celular ");
    break;
    case 2:
        console.log("impresora");
    break;
    case 3:
        console.log(" television 4k de 65'' ");
    break;
    default:
        console.log(`no elije ninguna opcion ${compras}`);
    break;
}


// Estructuras de repetición - lazos - ciclos - iteraciones
 //---for--
const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Compra lista"):console.log(i);
}