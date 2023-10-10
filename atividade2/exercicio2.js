
const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Função para calcular a transposta de uma matriz
function calcularTransposta(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;

  const transposta = [];
  for (let j = 0; j < colunas; j++) {
    transposta[j] = [];
    for (let i = 0; i < linhas; i++) {
      transposta[j][i] = matriz[i][j];
    }
  }

  return transposta;
}


function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t")); // Use "\t" para separar os elementos por tabulação
  }
}


console.log("Matriz A:");
imprimirMatriz(matrizA);


const transpostaA = calcularTransposta(matrizA);
console.log("\nMatriz Transposta de A:");
imprimirMatriz(transpostaA);
