const Produto = require('../models/Produto');

function produtoGet(app) {

    app.get('/produtos', (req, res) => {
        const produto = new Produto('Monitor Gamer LG 24 LED Full HD 144Hz, 1ms MBR',
            'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6',
            'R$1.170,00',
            '1')
        res.send({ "Monitor": produto })
        console.log(produto)
    })
}

function produtoPost(app) {
    const produto = new Produto('Monitor Gamer LG 24 LED Full HD 144Hz, 1ms MBR',
            'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6',
            'R$1.170,00',
            '1')

        app.post('/produtos', (req, res) => {    
        res.send({ "Monitor": produto })
        console.log(produto)
    })
}

module.exports = { produtoGet, produtoPost }