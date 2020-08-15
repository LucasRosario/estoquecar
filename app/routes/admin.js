module.exports = function(application){
  application.get('/formulario_inclusao_equipamentos', function(req, res){
    application.app.controllers.admin.formulario_inclusao_equipamentos(application, req, res);
  });
    
  application.post('/equipamentos/salvar', function(req, res){
    application.app.controllers.admin.salvar_equip(application, req, res);
  });
}