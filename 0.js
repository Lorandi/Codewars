var aluno = "João"
var notas = [5 , 7, 9]

function calcularNotaFinal (aluno,notas){
    notasSomadas = 0;

    for(i=0; i < notas.length; i++){
        notasSomadas += notas[i]
    }
    notaFinal = notasSomadas/notas.length

    if(notaFinal<6){
        resultado = 'X'
    }else if( notaFinal < 7){
        resultado = 'R'
    }else{
        resultado = 'A'
    }
    imprimirResultado(aluno,notaFinal,resultado)
}
    

calcularNotaFinal(aluno,notas)

function imprimirResultado(aluno,notaFinal,resultado){
        console.log("***Resultado do aluno " + aluno + "***");
        console.log(" > Nota final:" + notaFinal)

        if (resultado == "A") console.log("+ Parabens, aluno aprovado")
        if (resultado == "R") console.log("- Cuidado, aluno em recuperação")
        if (resultado == "X") console.log("- Atenção, aluno reprovado")
    }


