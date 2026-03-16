const p = require("./services/products");
const config = require("./services/config");


async function main() {
    console.log("Estudando commonjs modules");
    // p.getFullName("123", "Notebook");
    // p.getProductLabel("Monitor");

    console.log(config.cliente.device);


}

main();