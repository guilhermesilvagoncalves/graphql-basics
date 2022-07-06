const { ApolloServer, gql} = require ('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID!
        nome: String
        salario: Float
        vip: Boolean
    }
    type Produto{
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto:Float
    }
    type Query{
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
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
            return produto.preco * produto.desconto
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
            return {
                id: 1,
                nome: "Fulano de tal",
                salario_real: 5240.20,
                vip: false
            }
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