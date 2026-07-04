# Prática Containers Docker - Otimização de Build com Cache

## 📌 Descrição

Este projeto demonstra a criação de uma imagem Docker para uma aplicação Node.js utilizando boas práticas de construção de imagens.

O principal objetivo é otimizar o tempo de build aproveitando o mecanismo de cache do Docker. Para isso, o arquivo `package.json` é copiado antes dos demais arquivos da aplicação, permitindo que as dependências sejam reutilizadas sempre que não houver alterações.

---

## 🛠️ Tecnologias utilizadas

* Node.js 20
* Docker
* JavaScript
* Express

---

## 📁 Estrutura do projeto

```text
imagem_docker01/
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone git@github.com:guidm19/Pratica_Containers_docker.git
```

### 2. Acessar a pasta do projeto

```bash
cd Pratica_Containers_docker/imagem_docker01
```

### 3. Construir a imagem

```bash
docker build -t imagemdocker/app-node:1.0 .
```

Também é possível definir outra porta durante o build:

```bash
docker build --build-arg PORT_BUILD=7000 -t imagemdocker/app-node:1.0 .
```

### 4. Executar o contêiner

Se a imagem foi construída com a porta padrão (6000):

```bash
docker run -d -p 6000:6000 imagemdocker/app-node:1.0
```

Depois acesse:

```text
http://localhost:6000
```

---

## 📦 Explicação do Dockerfile

O Dockerfile segue uma estratégia otimizada para aproveitar o cache do Docker:

* Utiliza a imagem oficial **Node.js 20 Alpine**, que é menor e mais leve.
* Define o diretório de trabalho com `WORKDIR`.
* Permite configurar a porta da aplicação utilizando `ARG` e `ENV`.
* Copia inicialmente apenas os arquivos `package.json` e `package-lock.json`.
* Instala as dependências com `npm install`.
* Copia o restante dos arquivos da aplicação.
* Inicia a aplicação com `npm start`.

Essa estratégia evita reinstalar todas as dependências sempre que apenas arquivos da aplicação forem modificados.

---

## 💡 Benefícios da otimização

* Builds mais rápidos.
* Melhor aproveitamento do cache do Docker.
* Menor tempo de desenvolvimento.
* Organização das camadas da imagem.
* Boas práticas recomendadas para projetos Node.js.

---

## 📚 Conceitos praticados

* Criação de imagens Docker.
* Utilização de `FROM`.
* Utilização de `WORKDIR`.
* Utilização de `ARG`.
* Utilização de `ENV`.
* Utilização de `COPY`.
* Cache de camadas do Docker.
* Instalação de dependências com `npm install`.
* Execução da aplicação com `ENTRYPOINT`.
* Build de imagens com `docker build`.
* Execução de contêineres com `docker run`.

---

## 👨‍💻 Autor

**Guilherme**
