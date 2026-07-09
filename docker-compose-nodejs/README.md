# 🚀 Comunicação entre Containers com Docker Compose

Projeto desenvolvido para praticar a utilização do **Docker Compose** na criação e execução de uma aplicação composta por dois serviços em **Node.js**.

## 📋 Sobre o projeto

A aplicação é composta por:

* **Frontend:** executa na porta **3000** e disponibiliza uma página com um formulário.
* **Backend:** executa na porta **4000** e recebe as mensagens enviadas pelo frontend, exibindo-as no terminal.

O Docker Compose é responsável por construir as imagens, criar os contêineres e configurar automaticamente a comunicação entre eles.

---

## 📁 Estrutura do projeto

```text
docker-compose-nodejs/
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
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🛠️ Tecnologias

* Docker
* Docker Compose
* Node.js
* JavaScript

---

## ▶️ Como executar

Na raiz do projeto, execute:

```bash
docker compose up --build
```

Para executar em segundo plano:

```bash
docker compose up --build -d
```

---

## 🧪 Testando

Acesse no navegador:

```text
http://localhost:3000
```

Digite uma mensagem e clique em **Enviar**.

Para visualizar a mensagem recebida pelo backend:

```bash
docker compose logs -f backend
```

---

## 📚 Conceitos praticados

* Docker Compose
* Dockerfile
* Comunicação entre contêineres
* Aplicações Node.js
* Redes Docker criadas automaticamente
* Exposição e mapeamento de portas

---

## 👨‍💻 Autor

**Guilherme Dinelly Mourão**

