const bcrypt = require('bcrypt')

// Encripta la contraseña del usuario
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}


const comparePassword = (plainPassword, hashedPassword) => {
    /* plainPassword : Contraseña que recibimos del Login
       hashedPassword : Contraseña que tenenemos guardada en la base de datos,
       Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario y la comparamos con la que tenemos en la DB*/
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = {
    hashPassword,
    comparePassword
}