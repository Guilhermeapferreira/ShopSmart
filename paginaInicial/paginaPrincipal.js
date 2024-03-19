// Array com URLs das imagens de ofertas
const imagensOfertas = [
    '../imagns/lar.png',
    '../imagns/logoShopRedondosemfundo.png',
    'caminho/para/imagem3.jpg'
];

let indiceAtual = 0;
const tempoTroca = 5000; // Tempo em milissegundos (5 segundos)

function trocarImagemOferta() {
    document.getElementById('imagem-oferta').src = imagensOfertas[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagensOfertas.length;
}

// Trocar a imagem de oferta a cada intervalo de tempo definido
setInterval(trocarImagemOferta, tempoTroca);
