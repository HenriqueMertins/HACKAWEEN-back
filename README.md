# HACKWEEN
Projeto desenvolvido no Hackaween, evento organizado por SENAC Pelotas, onde equipes têm 12 horas para solucionar um desafio proposto. Os melhores projetos são avaliados por uma banca de especialistas de empresas consolidadas, e os três primeiros lugares recebem premiação em dinheiro.

# preparando o ambiente e instalando dependências

npm init -y

npm install express cors body-parser dotenv 

sqlite: npm install sqlite3
mysql: npm install mysql2

# subir o projeto

node setup.js

node server.js

# banco

docker run --rm -it -v "$(pwd):/workspace" -w /workspace keinos/sqlite3

# Extensões recomendadas

