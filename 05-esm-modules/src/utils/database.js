async function connectToDatabase(dataname) {
    console.log(`conectado ao banco: ${dataname}`);
};

async function desconectDataBase() {
    console.log("desconectado do banco");
}

const dataBaseType = {
    userType: "admin",
    typeData: "localData"
}

export { connectToDatabase, desconectDataBase, dataBaseType };