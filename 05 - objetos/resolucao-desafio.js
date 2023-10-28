// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
class Carro {
  constructor(marca, cor, gasto_medio_combustivel_km) {
    this.marca = marca;
    this.cor = cor;
    this.gasto_medio_combustivel_km = gasto_medio_combustivel_km;
  }

  calcular_valor_gasto(km_percorridos, preco_combustivel) {
    return km_percorridos * this.gasto_medio_combustivel_km * preco_combustivel;
  }
}

// Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcular_imc() {
    return this.peso / this.altura ** 2;
  }
}

// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
const jose = new Pessoa("José", 70.0, 1.75);
const imc_jose = jose.calcular_imc();
console.log(`O IMC de ${jose.nome} é ${imc_jose.toFixed(2)}`);
