function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let rank;

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else if (vitorias >= 101) {
        rank = "Imortal";
    }

    return { saldo, rank };
}

const resultado = calcularRank(75, 20);
console.log("O Herói tem saldo de vitórias de " + resultado.saldo);
console.log("Está no nível de " + resultado.rank);