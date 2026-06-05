# Sistema de Gerenciamento de Colaboradores

API RESTful desenvolvida em Node.js com integração a um banco de dados MySQL para gerenciar os colaboradores de uma empresa em modernização tecnológica. O sistema permite realizar operações de CRUD (Create, Read, Update, Delete) completas e conta com uma interface frontend simples.

## Tecnologias Utilizadas
* Backend: Node.js, Express
* Banco de Dados: MySQL
* Frontend: HTML, CSS, JavaScript (Vanilla)
* Ferramentas de Teste: Postman

## Estrutura do Banco de Dados
Tabela: `colaboradores`
* `id` (INT, PK, Auto Increment)
* `nome_completo` (VARCHAR)
* `idade` (INT)
* `cargo` (VARCHAR)
* `salario` (DECIMAL)
* `tempo_empresa` (INT - em meses)
* `data_admissao` (DATE)
* `setor` (VARCHAR)
* `status` (ENUM: 'Ativo', 'Inativo')

## Instruções para Execução do Projeto
1. Clone este repositório para a sua máquina local.
2. Instale as dependências executando: `npm install express mysql2 cors`
3. Configure o MySQL criando a base de dados `empresa_db` e a tabela conforme o script SQL contido na documentação.
4. Ajuste as credenciais do banco em `src/database/db.js`.
5. Execute o servidor utilizando: `node server.js`
6. Abra o ficheiro `frontend/index.html` ou aceda a `http://localhost:3000` no seu navegador.
