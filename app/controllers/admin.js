module.exports.formulario_inclusao_equipamentos = function(application, req, res){
  res.render("admin/form_equip",{validacao: {}, equipamento : {} });
}

module.exports.salvar_equip = function(application, req, res){
  var equipamento = req.body;

  req.assert('tipo','Tipo do equipamento é obrigatorio').notEmpty();
  req.assert('tombo','Tombo do equipamento é obrigatorio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render("admin/form_equip", {validacao : erros, equipamento : equipamento});
    return;
  }

  var connection = application.config.dbConnection();
  var equipModel = new application.app.model.EquipDAO(connection);

  equipModel.insertEquip(equipamento, function(error, result){
    res.redirect('/equipamentos'); // tratar reeinvio do formulario f5
  });
}