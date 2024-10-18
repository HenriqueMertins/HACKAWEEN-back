const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Conexão com o banco de dados

const app = express();
const PORT = process.env.PORT || 8081; // Utilize a porta 8081 conforme mencionado

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

// Rota para login (por exemplo)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Aqui você vai adicionar a lógica para verificar o login no banco de dados
  res.json({ message: 'Login logic here!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
