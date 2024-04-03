let nomedoaluno = prompt("Qual o nome do aluno?")
let primeiravaliacao = prompt("Qual a nota do(a) " + nomedoaluno + " na primeira avaliação?")
let segundaavaliacao = prompt("Qual a nota do(a) " + nomedoaluno + " na segunda avaliação?")
let terceiraavaliacao = prompt("Qual a nota do(a) " + nomedoaluno + " na terceira avaliação?")

let avarege = (Number(primeiravaliacao) + Number(segundaavaliacao) + Number(terceiraavaliacao)) / 3

if (avarege >= 7) {
    alert("O aluno(a) " + nomedoaluno + " foi aprovado com a nota: " + avarege)
} else {
    alert("O aluno(a) " + nomedoaluno + " foi reprovado com a nota: " + avarege)
}