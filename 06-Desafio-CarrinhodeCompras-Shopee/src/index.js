import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";


const myCart = [];
const myWishList = [];

console.clear();
console.log();
console.log("Welcome to the shopping cart! \n");



const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);


await cartService.displayCart(myCart);

console.log();
