const {usuarios, proximoID } = require('../data/db')

module.exports = {
    novoUsuario(_, {nome, salario, vip}){
        const emailExists = usuarios.some(u => u.nome == nome)
        if (emailExists) throw new Error('Nome já cadastrado')
        const novo = {
            id: proximoID(),
            nome,
            salario,
            vip,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, {id}){
        console.log(id)
        const i = usuarios.findIndex(u => u.id === id)
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