// Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima todos os números pares.
// Exemplo:
//     Entrada:
//         5
//         1
//         3
//         9
//         10
//         12

//     Saída:
//         Números Pares: 10, 12
let n = parseInt(prompt("Digite a quantidade de números: "));
let pares = [];
for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Digite um número: "));
  if (num % 2 === 0) {
    pares.push(num);
  }
}
console.log("Números Pares: " + pares.join(", "));
