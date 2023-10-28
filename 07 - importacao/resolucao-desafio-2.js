// Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima o maior e o menor número deste conjunto.

// Exemplo:
//     Entrada:
//         4
//         100
//         150
//         90
//         200

//     Saída:
//         Maior número: 200
//         Menor número: 90
let n = parseInt(prompt("Digite a quantidade de números: "));
let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Digite um número: "));
  if (num > maior) {
    maior = num;
  }
  if (num < menor) {
    menor = num;
  }
}
console.log("Maior número: " + maior);
console.log("Menor número: " + menor);
