const express = require('express');
const router = express.Router();

// Exemplo de rota de autenticação
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Aqui você pode adicionar a lógica de verificação de credenciais
  if (email === 'a' && password === '1') {
    return res.status(200).json({ message: 'Login bem-sucedido' });
  }

  return res.status(401).json({ message: 'Usuário ou senha incorretos' });
});

module.exports = router;
