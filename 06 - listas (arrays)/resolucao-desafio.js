// Para imprimir a tabuada de um número, você pode usar o seguinte código em JavaScript:
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5); // Exemplo de uso

// Para imprimir cada número par em uma lista de números, você pode usar o seguinte código em JavaScript:
function imprimirNumerosPares(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      console.log(lista[i]);
    }
  }
}

imprimirNumerosPares([1, 2, 3, 4, 5, 6]); // Exemplo de uso

// Para imprimir os nomes que começam com a letra “V” em uma lista de nomes, você pode usar o seguinte código em JavaScript:
function imprimirNomesComV(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i][0] === "V") {
      console.log(lista[i]);
    }
  }
}

imprimirNomesComV(["Victor", "Vanessa", "João", "Vitor"]); // Exemplo de uso

// Para preencher uma lista com todos os números pares contidos no intervalo de 10 a 50, você pode usar o seguinte código em JavaScript:
function preencherListaNumerosPares() {
  let lista = [];

  for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0) {
      lista.push(i);
    }
  }

  return lista;
}

console.log(preencherListaNumerosPares()); // Exemplo de uso

// Para imprimir todas as médias que ficaram de recuperação em uma lista de médias tiradas pelos alunos, você pode usar o seguinte código em JavaScript:
function imprimirMediasDeRecuperacao(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < 5) {
      console.log(lista[i]);
    }
  }
}

imprimirMediasDeRecuperacao([2, 7, 3, 8, 10, 4]); // Exemplo de uso

// Para imprimir a maior nota em uma lista de notas tiradas pelos alunos, você pode usar o seguinte código em JavaScript:
function imprimirMaiorNota(lista) {
  let maiorNota = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maiorNota) {
      maiorNota = lista[i];
    }
  }

  console.log(maiorNota);
}

imprimirMaiorNota([2, 7, 3, 8, 10, 4]); // Exemplo de uso
