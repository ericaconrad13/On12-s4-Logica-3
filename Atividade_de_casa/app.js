const livros   = require('./database')

//ordenando por idade de forma crescente
//livros.sort((a,b)=> a.idade - b.idade)
//como pegar entradas de pessoas usuárias no terminal
//1- eu preciso importar a ferramenta readline-sync
const pegarLivros= require('readline-sync')
//como fazer uma pergunta que vai ser respondida no terminal
const verLivrosPorCategoria = pegarLivros.question('Voce deseja encontrar um livro por categoria?(S/N)')
//verificando a partir da entrada, e mostrando os próximos passos do meu sistema
if(verLivrosPorCategoria.toLocaleUpperCase() === 'S') { //entrada para maiuscula e perguntando se é igual a 'S'
    console.log('Esses são os livros disponíveis:') // mostrar todos os livros disponiveis
   

   // const qualLocal = pegarEntrada.question('Qual local voce escolhe?') //pegando a nova entrada

  //  const locais = estudantes.filter(estudante => estudante.local === qualLocal)//realmente realizando o filtro a partir do local digitado
    
   // console.log(locais) //estou imprimindo as estudantes retornadas
} else {
    console.log('Essas sao todas os livros: ')
    console.log(livros)// mostra todas as estudantes
    // caso a pessoa escolha nao filtrar por localidade
}