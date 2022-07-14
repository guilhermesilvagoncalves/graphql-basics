module.exports = {
    precoComDesconto(produto){
        return produto.preco *  (1 - produto.desconto)
    },
    desconto(produto){
        return produto.desconto * 100+"%"
    }
}