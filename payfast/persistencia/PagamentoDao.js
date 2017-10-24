function PagamentoDao(connection){
  this._connection = connection
}

PagamentoDao.prototype.salva = (pagamento, callback) =>{
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento)
}

PagamentoDao.prototype.lista = (callback) =>{
    this._connection.query('select * from pagamentos', callback)
}

PagamentoDao.prototype.buscaPorId = (callback) =>{
    this._connection.query('select * from pagamentos where id = ?', callback)
}
