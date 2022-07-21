const { usuarios, proximoID } = require('../../data/db')


function procurarIndex(filtro){
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) return usuarios.findIndex(u => u.id === id)
    if (nome) return usuarios.findIndex(u => u.nome == nome)
    return -1
}

module.exports = { procurarIndex }