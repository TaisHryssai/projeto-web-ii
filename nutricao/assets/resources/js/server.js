let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   'use strict';
   res.sendFile( "contato.htm" );
})

function defaultResponse() {
   'use strict';
   return {
       name: 'Bem Vindo'
   };
}

app.use(function (req, res, next) {
   'use strict';
   res.setHeader('Access-Control-Allow-Origin', '*');

   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   
   next();
});

app.post('/', (req, res) => {
   'use strict';
   let content = defaultResponse();
   res.json(content);
})

app.post('/process_post', urlencodedParser, function (req, res) {
   'use strict';
   let param ={
      nomeCompleto:req.body.nomeCompleto.toLowerCase(),
      email:req.body.email.toLowerCase(),
      telefone:req.body.telefone.toLowerCase(),
      mensagem:req.body.mensagens.toLowerCase()
      } 
      let dados = "enviado com sucesso"
   let content = null;
   if (param == null || param == undefined) {
       content = defaultResponse();
   } else {
       content = {
           Dados: dados
       };
   }
   console.log(param);
   res.end(JSON.stringify(content));
})

app.get('/error', (req, res) => {
   'use strict';
   res.status(500).send("erro!!!");
})

let server = app.listen(port, function () {
   'use strict';
   let host = server.address().address;
   let port = server.address().port;
   
   console.log(`Porta http://localhost:${port}`,host)
})