let id = 1
function proximoID(){
    return id++
}

const usuarios = [
    {
        id: proximoID(),
        nome: "Fulano de tal",
        salario_real: 5240.20,
        vip: false,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: proximoID(),
        nome: "Beltrano Silva",
        salario_real: 10541.30,
        vip: true,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: proximoID(),
        nome: "Ciclano Pereira",
        salario_real: 2032.30,
        vip: false,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    {
        id: 1,
        nome: "Comum"
    },
    {
        id: 2,
        nome: "Administrador"
    }
]

module.exports = { usuarios, perfis, proximoID }