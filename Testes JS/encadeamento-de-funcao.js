// CRIEI UM OBJETO "ALUNOS" PARA SER FILTRADO PELO FOREACH =>{
let alunos = [
    { nome: "carlos", nota: 7 },
    { nome: " joao", nota: 6 },
    { nome: " marcos", nota: 2 }
]
function criarNota(media) {
    // ENTENDI QUE O FOREACH =>{ CRIA UMA NOVA VARIÁVEL INTERNA EX:"BALEIA"
    alunos.forEach(baleia => {
        if (baleia.nota > 10) {
            console.log(`ALERTA ${baleia.nome}, essa nota é INVALIDA!`)
        } else if (baleia.nota >= 7) {
            console.log(`Parabéns ${baleia.nome}, você foi aprovado!`)
        } else {
            console.log(`Sinto muito ${baleia.nome}, mas você foi reprovado!`)
        }

    });
}

return criarNota()

function mandarParaAfaculdade() {
    
}






/*function somar(x, y) {
    return x + y
}

function pegarResultado() {
    let resultado = somar(4, 20);
    return resultado;
}

let valorFinal = pegarResultado() * 2;



valorFinal = valorFinal - 10
console.log(`Agora temos um final oficial e ele é: ${valorFinal}`)
return valorFinal; 
*/