/* 
QUAIS AÇÕES O CARRINHO PODE FAZER:
    -> adicionar item;
    -> excluir item;
    -> remover um item (no caso de existir mais de uma unidade do mesmo item);
    -> Calcular o total;
*/


//Adicinar o item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};


// excluir todo o item do carrinho (independente da quantidade) passando o nome
async function deleteItemByName(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    };

};


// excluiir todo o item do carrinho (independente da quantidade) passando o index
async function deleteItemByIndex(userCart, index) {
    index -= 1; // Ajusta o índice para corresponder à exibição (1-based)

    if (index >= 0 && index < userCart.length) {
        userCart.splice(index, 1);
    }

};


// remover um item do carrinho (no caso de existir mais de uma unidade do mesmo item) passando o nome
// se houver aoenas 1 unidade - deve ser excluído do carrinho
async function removeItem(userCart, item) {

    // encontrar o index do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso não encontre o item
    if (indexFound === -1) {
        console.log("Item não encontrado no carrinho.");
        return;
    }

    // Se tiver mais de uma quanidade  - diminuir uma unidade do item
    if (userCart[indexFound].quantity > 1) {
        //remover 1 unidade do item
        userCart[indexFound].quantity -= 1;
        return;
    }

    // Se tiver apenas 1 unidade - remover o item do carrinho
    if (userCart[indexFound].quantity === 1) {
        // remover o item do carrinho
        userCart.splice(indexFound, 1);
        return;
    }
};


// calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n💰 TOTAL: R$ ${result.toFixed(2)}`);
};


async function displayCart(userCart) {
    console.log("\n" + "--".repeat(40));
    console.log("🛒 CART LIST:");
    console.log("--".repeat(40));

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. 🏷️  ${item.name}  -  R$ ${item.price.toFixed(2)}  |  x${item.quantity}  |  💲 ${item.subtotal().toFixed(2)}`);
    });

    await calculateTotal(userCart);
    console.log("--".repeat(40) + "\n");

}


export { addItem, deleteItemByIndex, deleteItemByName, removeItem, displayCart };