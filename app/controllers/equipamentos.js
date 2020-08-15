module.exports.equipamentos = function(application, req, res){
  var connection = application.config.dbConnection();
  var equipModel = new application.app.model.EquipDAO(connection);

  equipModel.getEquips(function(error, result){
    res.render("equipamentos/equipamentos", {equipamentos : result});
  });
}

module.exports.equipamento = function(application, req, res){
  var connection = application.config.dbConnection();
  var equipModel = new application.app.model.EquipDAO(connection);
   
  equipModel.getEquip(function(error, result){
    res.render("equipamentos/equipamento", {equipamento : result});
  });
}