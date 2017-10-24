module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisição de teste na porta 3000.')
    res.send('OK.')
  })

  app.post('/pagamentos/pagamento', (req, res)=>{
      const pagamento = req.body
      console.log('processando requisicao de um novo pagamento..')

      pagamento.status = 'CRIADO'
      pagamento.data = new Date

      const connection = app.persistencia.connectionFactory()
      const pagamentoDao = new app.persistencia.PagamentoDao(connection)

      pagamentoDao.salva(pagamento, (error, result)=>{
        console.log('pagamento criado');
        res.json(pagamento)
      })
  })
}
