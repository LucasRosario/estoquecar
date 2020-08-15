function EquipDAO(conn){  
  this._conn = conn
}

EquipDAO.prototype.getEquips = function(callback){
  this._conn.query('SELECT * FROM equipamentos', callback);
}

EquipDAO.prototype.getEquip = function(callback){
  this._conn.query('SELECT * FROM equipamentos WHERE id_equip = 4', callback);
} 

EquipDAO.prototype.insertEquip = function(equipamentos, callback){
  this._conn.query('INSERT INTO equipamentos SET ?',equipamentos, callback);
}

EquipDAO.prototype.get5UltimosEquips = function(callback){
  this._conn.query('SELECT * FROM equipamentos ORDER BY tombo DESC LIMIT 5', callback);
}

module.exports = function(){
  return EquipDAO;
}