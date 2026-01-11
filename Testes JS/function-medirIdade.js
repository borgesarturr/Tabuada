let familia = [
    { nome: "Arnoldo", idade: 55 }, { nome: "Helena", idade: 45 }, { nome: "Erlania", idade: 36 }, { nome: "Netchule", idade: 34 }, { nome: "Ramon", idade: 32 }, { nome: "Artur", idade: 30 }, { nome: "Kezia", idade: 29 }];

function medirIdade(faixaEtaria) {
    let idade = 40
    faixaEtaria.forEach(anos => {
        if (anos.idade <= 35) {
            console.log(`Parabén ${anos.nome}, Você não é um velhote!`)
        } else {
            console.log(`sinto muito ${anos.nome}, VELHOTE detected!`)
        }


    });
}

medirIdade(familia)
