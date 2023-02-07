class Produto {
    constructor(modelo, especificacao, valor, id) {
        this.modelo = modelo
        this.especificacao = especificacao
        this.valor = valor
        this.id = id

    }
}

const monitor = new Produto('Monitor Gamer LG 24 LED Full HD 144Hz, 1ms MBR', 
'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6',
'R$1.170,00',
'1')


module.exports = Produto