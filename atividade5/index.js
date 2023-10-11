const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

// Configurar o template engine Handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts' 
}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

