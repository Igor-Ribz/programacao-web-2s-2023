
const matrizA = [
  [1, 2],
  [3, 4]
];

const matrizB = [
  [5, 6],
  [7, 8]
];

// Verificar a compatibilidade das matrizes
const colunasA = matrizA[0].length;
const linhasB = matrizB.length;

if (colunasA !== linhasB) {
  console.log("Não é possível calcular a multiplicação. O número de colunas de A não é igual ao número de linhas de B.");
} else {
  function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasB = matrizB[0].length;
    const resultado = [];

    for (let i = 0; i < linhasA; i++) {
      resultado[i] = [];
      for (let j = 0; j < colunasB; j++) {
        let sum = 0;
        for (let k = 0; k < colunasA; k++) {
          sum += matrizA[i][k] * matrizB[k][j];
        }
        resultado[i][j] = sum;
      }
    }

    return resultado;
  }

  const matrizC = multiplicarMatrizes(matrizA, matrizB);

  // Imprimir a matriz C
  console.log("Matriz C (Resultado da multiplicação A x B):");
  for (let i = 0; i < matrizC.length; i++) {
    console.log(matrizC[i]);
  }
}
