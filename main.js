let times = ['Barcelona','Real Madrid', 'Athletic Bilbo', 'La Corumã', 'Atletic Madrid'];
let frutas = ['abacaxi', 'banana', 'morango', 'pera'];
 
//modificar o valor de um item do array 
times[0]='Betis';

//ler valor de um item do array
console.log(`Valor da posição número 3 ${times[3]}`); 
let time = times[4]
console.log(`Valor da variável time ${time}`);

//Mostrando o conteúdo de todo o array 
console.log(`Conteúdo do array ${times}`);

//Adicionando elementos no array 
times.push('Real Sociedad');
console.log(`Conteúdo do Array ${times}`);
frutas.push('Abacate');
console.log(`Conteúdo do array ${frutas}`);

//Retorna os elementos em uma unica string 
console.log(times.join('-'));

//shift remove do inicio e unshift adiciona no inicio 
//pop remove do fim e push adiciona no fim

console.log(times.length); //mostrando o comprimento do array
console.log(`Último time do array ${times[times.length-1]}`); //mostrando o ultimo item do array

times.forEach(element => {
    console.log(element);
});

const lista = document.querySelector('.frutas');
const listas = document.querySelector('.timess');
lerArray(frutas, lista);
lerArray(times, listas);

// function lerArray( {    
//     const lista = document.querySelector('.times'); /*ul*/
//     times.array.forEach(element => {
//         const linha = document.createElement ('li');
//         linha.innerHTML = element;
//         lista.appendChild(linha);
//     });
// }

// function lerArrayFor () {
//     const lista = document.querySelector('.times'); /* ul */
//     for (let index = o; index < times.length; index++) {
//         const linha = document.createElement('li');
//         linha.innerHTML = time[index];
//         lista.appendChild(linha);
//     }
// }

function lerArray(array, lista) {
    array.forEach(element => {
        const linha = document.createElement('li');
        linha.innerHTML = element;
        lista.appendChild(linha);
    });
}
  