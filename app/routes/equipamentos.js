module.exports = function(application){ 

  application.get('/equipamentos', function(req, res){
    application.app.controllers.equipamentos.equipamentos(application, req, res);
  });

  application.get('/equipamento', function(req, res){
    application.app.controllers.equipamentos.equipamento(application, req, res);
  });

};