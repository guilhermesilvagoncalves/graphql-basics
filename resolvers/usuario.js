const perfis = require('../data/db')

module.exports = {
    salario(usuario){
        console.log(usuario)
        return usuario.salario_real
    },
    perfil(usuario){
        return perfis.find(p => p.id == usuario.id)
    }
}