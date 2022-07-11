const { ApolloServer, gql} = require ('apollo-server')

const users = [
    {
        id: 1,
        nome: "Fulano de tal",
        salario_real: 5240.20,
        vip: false
    },
    {
        id: 2,
        nome: "Beltrano Silva",
        salario_real: 10541.30,
        vip: true
    },
    {
        id: 3,
        nome: "Ciclano Pereira",
        salario_real: 2032.30,
        vip: false
    }
]

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: Int
        nome: String
        salario: Float
        vip: Boolean
    }
    type Produto{
        nome: String!
        preco: Float!
        desconto: String
        precoComDesconto:Float
    }
    type Query{
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        usuario(id: Int): Usuario
        produtoEmDestaque: Produto
        usuariosLogados:[Usuario]
    }
`

const resolvers = {
    Usuario: {
        salario(usuario){
            console.log(usuario)
            return usuario.salario_real
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Up on ${url}`)
})