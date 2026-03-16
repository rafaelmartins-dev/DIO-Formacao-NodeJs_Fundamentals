/*
QUAIS AÇÕES UM ITEM FAZ: (CASOS DE USO)
    -> criar item com subtotal (preço * quantidade);
*/


async function createItem(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
        subtotal: () => price * quantity
    }
};


export { createItem };