let qtdVitoria = 34
let qtdDerrota = 9
let saldoVitoria

function calculo (qtdVitoria, qtdDerrota) {
    saldoVitoria = qtdVitoria - qtdDerrota

    if (saldoVitoria <= 10){
        return "ferro"
    }else if (saldoVitoria >= 11 && saldoVitoria <= 20){
        return "bronze"
    }else if (saldoVitoria >= 21 && saldoVitoria <= 50){
        return "prata"
    }else if (saldoVitoria >= 51 && saldoVitoria <= 80){
        return "ouro"
    }else if (saldoVitoria >= 81 && saldoVitoria <= 90){
        return "diamante"
    }else if (saldoVitoria >= 91 && saldoVitoria <= 100){
        return "lendario"
    }else if (saldoVitoria >= 101){
        return "imortal"
    }
}

let rank = calculo(qtdVitoria,qtdDerrota)

console.log("O Herói tem de saldo de " + saldoVitoria + " está no nível de " + rank)