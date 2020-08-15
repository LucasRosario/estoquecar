//PAGINA PRINCIPAL

var app = require('./config/server'); // chamando as configurações do servidor

app.listen(3003,function(){ // servidor escutando na porta 3000
  console.log('Servidor ON!');
}); 