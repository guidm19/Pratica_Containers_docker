# 🚀 Comunicação entre Containers com Docker e Node.js

Projeto desenvolvido para praticar a criação de **imagens Docker**, execução de **contêineres**, configuração de **redes Docker** e comunicação entre aplicações **Node.js** executadas em contêineres distintos.

---

## 📖 Sobre o projeto

A aplicação é composta por dois serviços independentes:

* 🖥️ **Frontend**: disponibiliza uma página web na porta **3000**, permitindo ao usuário enviar uma mensagem.
* ⚙️ **Backend**: recebe a mensagem enviada pelo frontend e a exibe no terminal do contêiner, executando na porta **4000**.

Os dois serviços se comunicam através de uma **rede Docker personalizada**, demonstrando como aplicações distribuídas podem trocar informações dentro de um mesmo ambiente Docker.

---

## 🏗️ Estrutura do projeto

```text
cord_cont_exerc/
│
├── frontend/
│   ├── Dockerfile
│   ├── frontend.js
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── Dockerfile
│   ├── backend.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tecnologias utilizadas

* Docker
* Node.js
* JavaScript
* HTTP
* QueryString

---

## 📌 Conceitos praticados

* Criação de imagens com Dockerfile
* Construção de imagens utilizando `docker build`
* Execução de contêineres com `docker run`
* Comunicação entre contêineres
* Redes Docker (`docker network`)
* Exposição e mapeamento de portas
* Organização de aplicações em frontend e backend
* Requisições HTTP entre serviços

---

## 🚀 Como executar

### 1️⃣ Criar a rede Docker

```bash
docker network create cord-network
```

### 2️⃣ Construir as imagens

```bash
docker build -t cord-front ./frontend

docker build -t cord-back ./backend
```

### 3️⃣ Executar o backend

```bash
docker run -d \
--name backend \
--network cord-network \
-p 4000:4000 \
cord-back
```

### 4️⃣ Executar o frontend

```bash
docker run -d \
--name frontend \
--network cord-network \
-p 3000:3000 \
cord-front
```

---

## 💻 Demonstração

Após iniciar os contêineres, acesse:

```text
http://localhost:3000
```

Digite uma mensagem no formulário e clique em **Enviar**.

Para visualizar a mensagem recebida pelo backend:

```bash
docker logs -f backend
```

Exemplo:

```text
Backend rodando na porta 4000

Mensagem recebida:
Olá Docker!
```

---

## 📚 Aprendizados

Durante este projeto foi possível praticar:

* Organização de aplicações em múltiplos serviços.
* Criação de imagens personalizadas utilizando Dockerfile.
* Comunicação entre contêineres por meio de uma rede Docker.
* Execução de aplicações Node.js em ambientes isolados.
* Boas práticas de estruturação de projetos Docker.

---

## 👨‍💻 Autor

**Guilherme Dinelly Mourão**

Graduando em Sistemas de Informação, com foco em desenvolvimento Full Stack e estudos em Docker, Node.js, bancos de dados e desenvolvimento web.

