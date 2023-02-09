const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')
const Cliente = require('../models/Cliente')

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos

const bdProduto = []
const bdFornecedor = []
const bdCliente = []

// Produtos
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


// Fornecedores
// Cria objetos do tipo Fornecedor e adiciona a lista de Fornecedores

const fornecedor = new Fornecedor('TechLab', 
'Rua Tabajara 203', '22334455')
bdFornecedor.push(fornecedor)

const fornecedor2 = new Fornecedor('TecShop', 
'Rua Nelica 123', '22434475')
bdFornecedor.push(fornecedor2)

const fornecedor3 = new Fornecedor('VisionTech', 
'Rua Vedigar 405', '623343459')
bdFornecedor.push(fornecedor3)


//Cliente
//Cria objetos do tipo Cliente e adicona a lista de Clientes

const cliente = new Cliente ('Joao', '123', 'Rua Confia')
bdCliente.push(cliente)

const cliente2 = new Cliente ('Thiago', '321', 'Rua No')
bdCliente.push(cliente2)

const cliente3 = new Cliente ('Paulo', '456', 'Rua Processo')
bdCliente.push(cliente3)



module.exports = {bdProduto, bdFornecedor, bdCliente}