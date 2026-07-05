# Imagem base do Node.js
FROM node:20

# (Linhas iniciais presumidas)
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app-node

# Define a porta que será usada pela aplicação
ARG PORT_BUILD=6000

# Define a variável de ambiente PORT com o valor do argumento PORT_BUILD
ENV PORT=$PORT_BUILD

# 1º COPIA APENAS OS ARQUIVOS DE DEPENDÊNCIAS
COPY package*.json ./

# 2º INSTALA AS DEPENDÊNCIAS (fica salvo no cache se o package.json não mudar)
RUN npm install

# 3º COPIA O RESTANTE DOS ARQUIVOS (como o seu index.js)
COPY . .

# Executa a aplicação quando o contêiner iniciar
ENTRYPOINT ["npm", "start"]