# API CRUD Cadastro de Clientes

## Descrição

API RESTful desenvolvida em **Node.js + Express** com **Sequelize**, **MySQL**, **JWT**


## Funcionalidades

### Usuários
- Registro de usuários (`/api/users/register`)
- Login e geração de token JWT (`/api/users/login`)
- Listagem de todos os usuários (`/api/users`)

### Clientes
- Listar todos os clientes com filtros e paginação (`/api/clients`)
- Criar novo cliente (`/api/clients`)
- Obter cliente pelo ID (`/api/clients/{id}`)
- Atualizar cliente (`/api/clients/{id}`)
- Remover cliente (`/api/clients/{id}`)
- Acessar imagem do cliente (`/uploads/{filename}`)

## Autenticação

- **JWT**: todas as rotas protegidas requerem autenticação.





## 🚀 Instalação

```bash
# Clonar o repositório
git clone https://github.com/douglasinforj/api_crud_node_autenticacao.git  api-clientes
cd api-clientes

# Instalar dependências
npm install

# Configurar ambiente
cp .env.example .env
# Editar o .env com suas credenciais do banco

# Criar tabelas no banco de dados
npx sequelize db:migrate

# Popular com roles e permissões padrão
node src/seeders/setup.js

# Iniciar o servidor
npm start

```

## Documentação Swagger

http://localhost:3000/api-docs

# Tecnologias Utilizadas

- Node.js + Express
- Sequelize + MySQL
- JWT (Autenticação)
- Swagger (Documentação)
- dotenv
- bcryptjs
- multer (upload de imagens)