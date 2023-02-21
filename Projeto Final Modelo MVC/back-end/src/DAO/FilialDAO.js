// importa o bd.js para poder usar o banco de dados simulados 
const db = require("../infra/db")

// essa classe encapsula o acesso aa banco de dados. todos  métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class FilialDAO  {

}