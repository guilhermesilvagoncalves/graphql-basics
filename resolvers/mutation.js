const { usuarios, proximoID } = require('../data/db')
const { procurarIndex } = require ('./utils/filter')

module.exports = {
    novoUsuario(_, { dados }){
        const emailExists = usuarios.some(u => u.nome == dados.nome)
        if (emailExists) throw new Error('Nome já cadastrado')
        const novo = {
            id: proximoID(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        novo.salario_real = dados.salario
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, {filtro}){
        const i = procurarIndex(filtro)
        if (i<0) return null
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarUsuario(_, args){
        const index = usuarios.findIndex(u => u.id === args.id)
        if (index < 0) return null
        const usuarioAlterado = {
            ...usuarios[index],
            ...args
        }
        usuarioAlterado.salario_real = args.salario
        console.log(args)

        console.log(usuarioAlterado)
        usuarios.splice(index, 1, usuarioAlterado)
        return usuarioAlterado
    }
}