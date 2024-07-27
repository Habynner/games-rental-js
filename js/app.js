let gamesAlugados = 0;

document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__button--return').length;
    contarGamesAlugados();
});

function contarGamesAlugados(){
    let gamePlural = gamesAlugados > 1 ? 'games' : 'game';
    let alugadoPlural = gamesAlugados > 1 ? 'alugados' : 'alugado';
    console.log(`Estamos com ${gamesAlugados} ${gamePlural} ${alugadoPlural}.`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

   if(botao.classList.contains('dashboard__item__button--return')){
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
    botao.classList.remove('dashboard__item__button--return');
    imagem.classList.remove('dashboard__item__img--rented');
    botao.innerHTML = 'Alugar';
    gamesAlugados--;
    }
   } else {
    botao.classList.add('dashboard__item__button--return');
    imagem.classList.add('dashboard__item__img--rented');
    botao.innerHTML = 'Devolver';
    gamesAlugados++;
   }
   contarGamesAlugados();
   isPalindromo(String(nomeJogo));
}

function isPalindromo(palavra){
    let separaLetras = palavra.split('');
    let palavraInvertida = separaLetras.reverse();
    palavraInvertida = palavraInvertida.join('');

    let palindromoTrue = palavra == palavraInvertida ? `A Palavra '${palavra}' é um palíndromo` : `A Palavra '${palavra}' não é um palíndromo`;
       console.log(palindromoTrue);

}

function ordenarNumeros(a, b, c) {

    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);

}

ordenarNumeros(35, 16, 5);