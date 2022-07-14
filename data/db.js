const usuarios = [
    {
        id: 1,
        nome: "Fulano de tal",
        salario_real: 5240.20,
        vip: false,
        perfil_id: 1
    },
    {
        id: 2,
        nome: "Beltrano Silva",
        salario_real: 10541.30,
        vip: true,
        perfil_id: 2
    },
    {
        id: 3,
        nome: "Ciclano Pereira",
        salario_real: 2032.30,
        vip: false,
        perfil_id: 1
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

module.exports = { usuarios, perfis }