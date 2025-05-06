const login=(username, password) =>{
    console.log(`Welcome-${username}`)
}

// para importar los modulos
//module.exports =login // common JS en la antigua version

// para una cosa
export default login // en la forma ES6


// para varias cosas

const likes = 123456
export{
    login,
    likes
}
