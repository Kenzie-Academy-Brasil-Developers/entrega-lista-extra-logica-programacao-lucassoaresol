function calculateSalary(fixo,vendas){
    let comissao = 0
    let salario = 0
    if(vendas <= 1200){
        comissao = vendas*(3/100)
    }
    if (vendas>1200){
        comissao = vendas*(5/100)
    }
    salario = fixo + comissao
    return salario
}

console.log('calculateSalary():')
console.log(calculateSalary(1200,1500))

function divisaoInteiro(valor,divisor){
    let operacao = valor/divisor
    return Math.floor(operacao)
}

function cashMachine(saque,fixo,vendas){
    let salario = calculateSalary(fixo,vendas)
    let restante = saque
    let nota = 0
    let notasDisponiveis = [200,100,50,20,10,5,2]
    let saldo = salario - restante
    let resultado = "Notas sacadas: "
    if (saldo>=0){
        for (let i=0;i<notasDisponiveis.length;i++){
                nota = divisaoInteiro(restante,notasDisponiveis[i])
                if(nota>1){
                    restante = restante - notasDisponiveis[i]*nota
                    resultado = resultado + `${nota} notas de R$${notasDisponiveis[i]}`
                }
                else if (nota == 1){
                    restante = restante - notasDisponiveis[i]*nota
                    resultado = resultado + `, ${nota} nota de R$${notasDisponiveis[i]}`
                }
        }
        resultado = resultado + `, Saldo Atual: R$${saldo}`
    }
    else{
        resultado='Saldo Insuficente'
    }
    return resultado
}

console.log('cashMachine():')
console.log(cashMachine(1257,1200,1500))

function calculateStock(atual,max,min){
    let media = ((max + min)/2)
    if (atual>=media){
        return 'Não efetuar compra'
    }
    else return 'Efetuar compra'
}

console.log('calculateStock():')
console.log(calculateStock(30,50,10))

function calculateAge(nasc,atual){
    let ano = atual - nasc
    let meses = ano * 12
    let dias = meses * 30
    let semanas = meses * 4
    return `Idade em anos: ${ano}, idade em meses: ${meses}, idade em dias: ${dias}, idade em semanas: ${semanas}`
}

console.log('calculateAge():')
console.log(calculateAge(1996,2022))

function getDiagonal(arr){
    let resultado = []
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if (i==j){
                resultado.push(arr[i][j])
            }
        }
    }
    return resultado
}

console.log('getDiagonal():')
console.log(getDiagonal([[1, 2, 3] , [4, 5, 6] , [7, 8, 9]]))