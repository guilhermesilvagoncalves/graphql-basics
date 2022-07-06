const { ApolloServer, gql} = require ('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID!
        nome: String
        salario: Float
        vip: Boolean
    }
    

    type Query{
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Usuario: {
        salario(usuario){
            console.log(usuario)
            return usuario.salario_real
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