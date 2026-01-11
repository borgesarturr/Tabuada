/*function dobrar(numero) {
    return numero * 2
}

let resultado = dobrar(10)
console.log(`O resultado desta operação é ${resultado}!`)
*/

const alunosManha = [
    { nome: "Mathew", nota: 10 },
    { nome: "Joshua", nota: 6 },
    { nome: "Noah", nota: 4 },
    { nome: "Susan", nota: 7 }
]

const alunosNoite = [
    { nome: "Kate", nota: 8 },
    { nome: "Mikey", nota: 3 },
    { nome: "John", nota: 1 },
    { nome: "Kaleb", nota: 9 }
]

function avaliarAlunos(notas) {
    let media = 7
    notas.forEach(aluno => {
        if (aluno.nota >= 7 || aluno.nota >= 6) {
            console.log(`Parabéns ${aluno.nome}, você tirou ${aluno.nota} e foi aprovado!`)
        } else {
            console.log(`Sinto muito ${aluno.nome}, você tirou ${aluno.nota} e foi REPROVADO! `)
        }

    });
}

avaliarAlunos(alunosManha)


function decidirResultado(nota, media) {
    
    if(nota >= media) {
        return "APROVADO"
    } else {
        return "REPROVADO"
    }
}

let aluno = [
    { nome: "Ana", nota: 1 },
    { nome: "Bruno", nota: 9 }
]

function mensagemAluno(nome, resultado) {
   return `o aluno ${nome} foi ${resultado}`
        
    
}

