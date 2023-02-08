const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')
const Cliente = require('../models/Cliente')

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos

const bdProduto = []
const bdFornecedor = []
const bdCliente = []

// Ususários
// Cria objetos do tipo Produto e adiciona a lista de produtos

const produto = new Produto('Monitor Gamer LG 24 LED Full HD 144Hz, 1ms MBR',
    'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6', 'R$1.170,00', '1')
bdProduto.push(produto)

const produto2 = new Produto('PLACA DE VIDEO MSI RADEON RX 6500 XT',
    '1 x DisplayPort (v1.4a) 1 x HDMI (suporta 4K@120Hz/8K@60Hz e VRR conforme especificado em HDMI 2.1, LED, 23.6', 'R$1.299,99', '2')
bdProduto.push(produto2)

const produto3 = new Produto('SSD Kingston A2000 500GB',
    'Velocidade de leitura/escrita de 2500/2000 MB/s, NVMe', 'R$239.99', '3')
bdProduto.push(produto3)

const produto4 = new Produto('Teclado Logitech K810',
    'Teclado sem fio, retroiluminado, Bluetooth', 'R$139.99', '4')
bdProduto.push(produto4)

const produto5 = new Produto('Pendrive',
    '16GB', 'R$20', '5')
bdProduto.push(produto5)


module.exports = {bdProduto, bdFornecedor, bdCliente}