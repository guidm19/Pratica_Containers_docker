# 🐳 Prática de Docker

> Repositório criado para reunir exercícios, projetos e anotações desenvolvidos durante meus estudos de Docker e containers.

O objetivo deste repositório é documentar minha evolução no aprendizado de Docker, praticando desde os conceitos fundamentais até recursos mais avançados, por meio de exemplos práticos e projetos desenvolvidos ao longo dos estudos.

---

# 📚 O que é Docker?

O **Docker** é uma plataforma que permite criar, distribuir e executar aplicações em **containers**.

Um container reúne a aplicação e todas as suas dependências em um ambiente isolado, garantindo que ela funcione da mesma forma em qualquer computador ou servidor.

---

# 🚀 Conceitos Fundamentais

## 📦 Imagem (Image)

Uma **imagem** é um modelo utilizado para criar containers.

Ela contém tudo o que a aplicação precisa para ser executada:

* Sistema operacional base
* Bibliotecas
* Dependências
* Código da aplicação
* Configurações

Exemplo:

```bash
docker build -t minha-imagem .
```

---

## 📦 Container

Um **container** é uma instância em execução de uma imagem.

Enquanto a imagem é o modelo, o container é a aplicação funcionando.

Exemplo:

```bash
docker run minha-imagem
```

---

## 📄 Dockerfile

O **Dockerfile** é um arquivo que contém todas as instruções utilizadas para construir uma imagem Docker.

Exemplo:

```dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]
```

---

## 📁 Volume

Volumes permitem armazenar dados de forma persistente.

Mesmo que um container seja removido, os dados continuam armazenados.

Exemplo:

```bash
docker volume create meu-volume
```

---

## 🌐 Rede (Network)

As redes permitem que containers se comuniquem entre si.

É muito utilizada quando uma aplicação precisa acessar um banco de dados ou outros serviços.

Exemplo:

```bash
docker network create minha-rede
```

---

## 📦 Docker Hub

O Docker Hub é o repositório oficial de imagens Docker.

Nele é possível baixar imagens prontas, como:

* Node.js
* MySQL
* PostgreSQL
* Nginx
* Ubuntu
* Redis

Exemplo:

```bash
docker pull node:20
```

---

# 🛠️ Comandos Básicos

## Construir uma imagem

```bash
docker build -t nome-da-imagem .
```

## Executar um container

```bash
docker run nome-da-imagem
```

## Executar em segundo plano

```bash
docker run -d nome-da-imagem
```

## Mapear portas

```bash
docker run -p 8080:3000 nome-da-imagem
```

## Listar containers em execução

```bash
docker ps
```

## Listar todos os containers

```bash
docker ps -a
```

## Listar imagens

```bash
docker images
```

## Remover um container

```bash
docker rm ID_CONTAINER
```

## Remover uma imagem

```bash
docker rmi NOME_IMAGEM
```

## Visualizar logs

```bash
docker logs ID_CONTAINER
```

---

# 📂 Estrutura do Repositório

Ao longo dos estudos, novos projetos serão adicionados, abordando diferentes recursos do Docker.

Exemplo:

```text
Pratica_Containers_Docker/
├── imagem-container-docker/
├── nginx-ubuntu/
├── docker-compose/
├── volumes/
├── redes/
└── README.md
```

---

# 🎯 Objetivos deste Repositório

* Praticar os principais conceitos do Docker.
* Aprender a criar imagens personalizadas.
* Executar aplicações utilizando containers.
* Trabalhar com volumes e persistência de dados.
* Configurar redes entre containers.
* Utilizar Docker Compose.
* Organizar projetos seguindo boas práticas.

---

# 📖 Conteúdo Estudado

* Containers
* Imagens Docker
* Dockerfile
* Docker Hub
* Build de imagens
* Execução de containers
* Mapeamento de portas
* Variáveis de ambiente
* Volumes
* Redes Docker
* Docker Compose
* Node.js com Docker
* Nginx com Docker
* MySQL com Docker

---

# 👨‍💻 Autor

**Guilherme Mourão**

Bacharel em Sistemas de Informação • Participante da Web Academy UFAM • Desenvolvedor Full Stack em formação

---

> 💡 *"A melhor forma de aprender Docker é colocando a mão na massa. Este repositório representa minha jornada de estudos, prática e evolução com containers."*
