// Defina a matriz A
var matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Função para calcular a transposta de uma matriz
function calcularTransposta(matriz) {
    var transposta = [];
    for (var i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (var j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

// Imprima a matriz A
console.log("Matriz A:");
for (var i = 0; i < matrizA.length; i++) {
    console.log(matrizA[i].join("\t"));
}

// Calcule e imprima a matriz transposta
var matrizTransposta = calcularTransposta(matrizA);
console.log("\nMatriz Transposta:");
for (var i = 0; i < matrizTransposta.length; i++) {
    console.log(matrizTransposta[i].join("\t"));
}