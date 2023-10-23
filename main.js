const itensCarrinho = {}
// Verifica se o item adicionado já existe no Carrinho
function addCarrinho(itemNome, itemPreco) {
    if (itensCarrinho[itemNome]) {
        // A quantidade do produto vai aumentar
        itensCarrinho[itemNome].quantity++
        itensCarrinho[itemNome].precoTotal +=
            itemPreco
        itensCarrinho[itemNome].ilItem.querySelector
            (".quantity").innerHTML = itensCarrinho
            [itemNome].quantity;
        itensCarrinho[itemNome].ilItem.querySelector
            ("preco-total").innerHTML = "R$" +
            itensCarrinho[itemNome].precoTotal.toFixed(2)
    } else {
        const liItem = document.createElement("li")
        liItem.innerHTML = `
    <div class="item">
        <span>${itemNome}</span>
        <button class=add onclick= "addCarrinho ('${itemNome}', ${itemPreco})">+</button>
        <span class="quantity">1</span>
        <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
        <span class="precoTotal">R$${itemPreco.toFixed(2)}</span>
    </div>
    `
        document.getElementById("itens-lista").appendChild(liItem)
        itensCarrinho[itemNome] = {
            quantity: 1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }

    let precoTotal = 0
    for (let itemNome in itensCarrinho) {
        precoTotal += itensCarrinho[itemNome].precoTotal
    }

    // Atualiza o valor total
    document.getElementById("preco-total").innerHTML = "valor Total R$" + precoTotal.toFixed(2)
    updatedCarrinho()

}

function removeCarrinho(itemNome, itemPreco) {
    if (itensCarrinho[itemNome]) {
        if (itensCarrinho[itemNome].quantity > 1) {
            itensCarrinho[itemNome].quantity--
            itensCarrinho[itemNome].precoTotal -=
                itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML =
                itensCarrinho[itemNome].quantity
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML =
                "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
        } else {
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }

        updatedCarrinho()
        document.getElementById("preco-total").innerHTML = "Valor Total: R$" + precoTotal.toFixed(2)
        updatedCarrinho()
    }

    function updatedCarrinho() {
        c
    }
}