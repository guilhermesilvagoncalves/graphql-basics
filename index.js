const { ApolloServer, gql} = require ('apollo-server')
const { importSchema } = require('graphql-import')

const users = [
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

const resolvers = {
    Usuario: {
        salario(usuario){
            console.log(usuario)
            return usuario.salario_real
        },
        perfil(usuario){
            return perfis.find(p => p.id == usuario.id)
        }
    },
    Produto: {
        precoComDesconto(produto){
            return produto.preco *  (1 - produto.desconto)
        },
        desconto(produto){
            return produto.desconto * 100+"%"
        }
    },
    Query: {
        ola() {
            return "Bom dia!"
        },
        horaAtual() {
            return `${new Date()}`
        },
        usuarioLogado() {
            return users[0]
        },
        usuariosLogados() {
            return users
        },
        usuario(_, { id }) {
            return users
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
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Up on ${url}`)
})