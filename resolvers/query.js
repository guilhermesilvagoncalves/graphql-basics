const {usuarios,perfis} = require('../data/db')

module.exports = {
    ola() {
        return "Bom dia!"
    },
    horaAtual() {
        return `${new Date()}`
    },
    usuarioLogado() {
        return usuarios[0]
    },
    usuariosLogados() {
        return usuarios
    },
    usuario(_, { id }) {
        return usuarios
                .find(u => u.id === id)
    },
    produtoEmDestaque() {
        return {
            nome: "Carro muito top",
            preco: 20000.00,
            desconto: 0.225
        }
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }){
        return perfis.find(p => p.id == id)
    }
}