const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
};

const player3 = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
}

const player4 = {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}

const player5 = {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0
}

const player6 = {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}


async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};


async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }

    return result;
}


async function logRollResult(player1, block, diceResult, attribute) {
    console.log(`${player1.nome} 🎲 rolou o dado de ${block} e obteve ${diceResult} + ${attribute} de atributo = ${diceResult + attribute}`);
}


async function playRaceEngine(p1, p2) {
    for (let round = 1; round <= 5; round++) {
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        console.log(`🏁 RODADA ${round}`);

        //sortear um bloco de pista
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        //rolar os dados de cada jogador
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + p1.velocidade;
            totalTestSkill2 = diceResult2 + p2.velocidade;

            await logRollResult(p1, block, diceResult1, p1.velocidade);
            await logRollResult(p2, block, diceResult2, p2.velocidade);
        };

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + p1.manobrabilidade;
            totalTestSkill2 = diceResult2 + p2.manobrabilidade;

            await logRollResult(p1, block, diceResult1, p1.manobrabilidade);
            await logRollResult(p2, block, diceResult2, p2.manobrabilidade);
        };

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + p1.poder;
            let powerResult2 = diceResult2 + p2.poder;

            console.log(`${p1.nome} ⚔️  ${p2.nome} !!`);

            await logRollResult(p1, block, diceResult1, p1.poder);
            await logRollResult(p2, block, diceResult2, p2.poder);

            if (powerResult1 > powerResult2 && p2.pontos > 0) {
                p2.pontos -= 1;
                console.log(`💥 ${p1.nome} venceu o confronto!! ${p2.nome} perde um ponto!`);
            }

            if (powerResult2 > powerResult1 && p1.pontos > 0) {
                p1.pontos -= 1;
                console.log(`💥 ${p2.nome} venceu o confronto!! ${p1.nome} perde um ponto!`);
            }

            console.log(powerResult1 === powerResult2 ? `🤝 Empate no confronto! Ninguém perde pontos!` : "");
        };


        // verificar o vencedor da rodada e atribuir pontos
        if (totalTestSkill1 > totalTestSkill2) {
            p1.pontos += 1;
            console.log(`🏆 ${p1.nome} venceu a rodada e marcou um ponto! \n`);
        } else if (totalTestSkill2 > totalTestSkill1) {
            p2.pontos += 1;
            console.log(`🏆 ${p2.nome} venceu a rodada e marcou um ponto! \n`);
        } else {
            console.log(block != "CONFRONTO" ? `🤝 A rodada terminou empatada! Ninguém marca pontos! \n` : "");
        }

        console.log("-------------------------------------------------------\n");
    }
}


async function declareWinner(p1, p2) {
    console.log(`🚩 Corrida finalizada! \n`);
    console.log(`${p1.nome} tem ${p1.pontos} pontos. \n`);
    console.log(`${p2.nome} tem ${p2.pontos} pontos. \n`);

    if (p1.pontos > p2.pontos) {
        console.log(`🎉 ${p1.nome} é o grande vencedor da corrida!`);
    } else if (p2.pontos > p1.pontos) {
        console.log(`🎉 ${p2.nome} é o grande vencedor da corrida!`);
    } else {
        console.log(`🤝 A corrida terminou empatada! Ambos os jogadores são vencedores!`);
    }
};


(async function main() {
    console.log();
    console.log(`🏁 🚨 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`);

    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);

    console.log();

})();