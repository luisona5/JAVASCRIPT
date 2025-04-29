// destructuracion de un objeto

const user = {
    name:"Lizbeth Yamileth ",
    lastName:" ",
    age:26,
    address:{
        city:"Quito",
        hometown:" San Gabrie",
        Facebook:
        {
            Starting: "Diciembre de 2014",
            
        }
    }
}
const {name,lastName,age,address} = user
console.log(name,lastName,age,address);


// congelacion de un objeto

Object.freeze(user)
console.log(Object.isFrozen(user));
user.image ="t.ly/Rhgs"





// Copiar Objetos

const extraInformation = {
    address:{
        city:"Quito",
        telephone:"0991806540",
        street:"Calderon"
    },
    Friends:['Patricio','Mishell','Adrian','Sebastian','Fernando'],

    sendMail (){
        return `send mail to ${this.Friends[1]}`
    },
    
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}


const allInformation = {...user,...extraInformation}
console.log(allInformation)




//---------------------arrays---------------------
'use strict';
const friends = ["Manuel","Ana","Carmen","Dayana","Alex"]

const informationFriends= ["Luis ","Oña",25,true,{ciudad:"quito"},["Guamani","Estacion Sur"]]

const products = ["Markplace","more Fiends","","video"]

const followerSocialMedia = [23,56,37,12]

console.log("Número de amigos:", friends.length);
console.log(" cosas que dentro de facebook:", products.length);
products.length > 0 ? console.log("Explore todos los contenidos") : console.log("no hay nada que mostrar")



//-----------------metodos-------------



const profileUser= ["Luis ","Oña",34,true,{ciudad:"Quito"}]
const skills = ["frontend","backend"]
const nickname ="Luis Oña"

// Agrega al final del arreglo
profileUser.push(skills)
// Agregar al inicio del arreglo
profileUser.unshift(nickname)
console.log(profileUser);


// Elimina el elemento del final del arreglo
profileUser.pop(profileUser)

// Elimina el elemento del inicio del arreglo
profileUser.shift(profileUser)
console.log(profileUser);



const friendsFacebook = ["Clemenete","Rocio","Kimberly","Anahi","Matias"]

// método find
const friendOne = friends.find((e)=>e==="Kimberly")
console.log(friendOne);

const friendTwo = friends.find((e)=>e==="KimberlyElizabeth")
console.log(friendTwo);



// método findIndex
const encontrar = friends.findIndex((f)=>f==="Rocio")

console.log(encontrar)



// método filter
const newfriendsOne = friends.filter((e)=>e.startsWith('k'))
const newfriendTwo = friends.filter((e)=>e!='kimberly')

console.log(newfriendsOne);
console.log(newfriendTwo);




const AmigosInformacion = [
    { name: "Rodrigo", age: 21 },
    { name: "Maria", age: 18 },
    { name: "Josue", age: 55 },
    { name: "Andra", age: 19 },
    { name: "Tania", age: 21 },
    { name: "Alisson", age: 21 },
];

const newFriends = [
    {   photo:'one',
        likes: 625,
        Comment: 1,
        
    },
    {   photo:'two',
        likes: 65,
        Comment: 100,
    },
    {
        photo:'tree',
        likes: 155,
        Comment: 10,
    }
]


const resultado = newFriends.reduce((pre, act) => pre = act.likes, 0);
console.log("la foto con mas comentada es: ",resultado);

