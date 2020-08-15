module.exports.index = function(application, req, res){
  
  var connection = application.config.dbConnection();
  var equipModel = new application.app.model.EquipDAO(connection);

  equipModel.get5UltimosEquips(function(error, result){
    res.render("home/index", {equipamentos : result});
  });
  
}