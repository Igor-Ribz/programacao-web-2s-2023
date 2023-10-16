
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o mecanismo de visualização Handlebars
app.engine('handlebars', exphbs({
  extname: '.handlebars',
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Configurar o diretório de visualizações
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Rota principal para renderizar o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para processar o formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  
  // Verificar se algum campo está vazio
  if (!nome || !endereco || !telefone || !data) {
    return res.render('dados', { error: 'Todos os campos são obrigatórios.' });
  }
  
  // Renderizar a página de dados com os dados inseridos
  res.render('dados', { nome, endereco, telefone, data });
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
