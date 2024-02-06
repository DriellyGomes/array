let times = ['Barcelona','Real Madrid', 'Athletic Bilbo', 'La Corumã', 'Atletic Madrid'];
let frutas = [];
 
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

for (let index = 0; index < times.length; index++) {
    console.log(times[index]);  
}