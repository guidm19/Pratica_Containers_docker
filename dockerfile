# Imagem base do Node.js
FROM node:20

WORKDIR /app-node

# Copia os arquivos do projeto para o contêiner
COPY . .

# Instala as dependências
RUN npm install

# Executa a aplicação quando o contêiner iniciar
ENTRYPOINT ["npm", "start"]