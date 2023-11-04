const axios = require('axios');

function getProdutos(){
  const webhookURL = 'http://187.111.192.23:5678/webhook/pdv/produtos';
  
  // Configuração da requisição
  const requestOptions = {
    method: 'GET', // Você pode usar 'GET' ou 'POST' dependendo da sua webhook
    url: webhookURL,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Chama a webhook usando fetch
  axios(requestOptions)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

function deleteProdutos(id){
  const webhookURL = 'http://187.111.192.23:5678/webhook-test/pdv/produtos';
  
  const data = {
    id: id
  };

  // Configuração da requisição
  const requestOptions = {
    method: 'DELETE', // Você pode usar 'GET' ou 'POST' dependendo da sua webhook
    url: webhookURL,
    headers: {
      'Content-Type': 'application/json'
    },
    params: JSON.stringify(data)
  };

  // Chama a webhook usando fetch
  axios(requestOptions)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Erro na srequisição:', error);
    });
}

deleteProdutos();