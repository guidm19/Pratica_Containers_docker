# Prática Containers Docker - Imagem Docker 01

## 📌 Descrição

Este projeto foi desenvolvido como prática de criação de imagens Docker utilizando Node.js.

A aplicação executa um servidor Node.js dentro de um contêiner Docker e demonstra os conceitos básicos de construção e execução de imagens.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Docker
* JavaScript

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

### 2. Entrar na pasta do projeto

```bash
cd Pratica_Containers_docker/imagem_docker01
```

### 3. Construir a imagem Docker

```bash
docker build -t imagemdocker/app-node:1.0 .
```

### 4. Executar o contêiner

```bash
docker run -d -p 8081:3000 imagemdocker/app-node:1.0
```

---

## 📦 Dockerfile

O Dockerfile realiza as seguintes etapas:

* Utiliza uma imagem base do Node.js.
* Define o diretório de trabalho.
* Copia os arquivos da aplicação para o contêiner.
* Instala as dependências do projeto.
* Inicia a aplicação com `npm start`.

---

## 📚 Objetivos de aprendizagem

Durante esta prática foram exercitados os seguintes conceitos:

* Criação de imagens Docker.
* Utilização de `FROM`.
* Utilização de `WORKDIR`.
* Utilização de `COPY`.
* Utilização de `RUN`.
* Utilização de `ENTRYPOINT`.
* Build de imagens com `docker build`.
* Execução de contêineres com `docker run`.
* Mapeamento de portas.

---

## 👨‍💻 Autor

**Guilherme**
