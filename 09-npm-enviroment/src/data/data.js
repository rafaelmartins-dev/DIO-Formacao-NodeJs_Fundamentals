
async function conectDatabase(user, password) {
    if (user === "naruto" && password === "uzumaki") {
        console.log("Login realizado !!! Conectado ao banco de dados!");
    } else {
        console.log("Falha de login!! Não foi possível conectar!");
    }
}

export { conectDatabase };