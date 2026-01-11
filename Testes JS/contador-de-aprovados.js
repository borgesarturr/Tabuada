let lista = [
    { nome: "marcos", nota: 8 },
    { nome: "amilton", nota: 5 },
    { nome: "ana", nota: 1 },
    { nome: "socrates", nota: 2 },
    { nome: "joana", nota: 10 }
];

function contarAprovados(aprovados) {
    let nota = 7
    aprovados.forEach(aluno => {
        if (aluno.nota >= 8) {
            console.log(`Parabéns ${aluno.nome}, você está aprovado!`)
        } else {
            console.log(`Sinto muito ${aluno.nome}, você foi REPROVADOOOO!`)
        }

    });
}

contarAprovados(lista)