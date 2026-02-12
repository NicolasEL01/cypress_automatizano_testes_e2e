# 🐶 Adopet - Testes Automatizados com Cypress

Automação de testes E2E e API da aplicação Adopet, utilizando Cypress.

Este projeto foi desenvolvido para validar os fluxos críticos da aplicação, aplicar boas práticas de automação de testes e simular cenários de uso realistas, combinando testes de interface e de API.

## 🧪 Testes Implementados

### ✅ End-to-End (E2E)
- **Cadastro:** Validação dos cenários de sucesso (caminho feliz) e de falha (caminho triste) no formulário de registro.
- **Login:** Testes para login com credenciais válidas e inválidas.
- **Validação de Mensagens:** Verificação das mensagens de erro e de feedback para o usuário.
- **Navegação:** Testes que asseguram a navegação entre as diferentes páginas da aplicação.

### 🔌 Testes de API
- **Login via API:** Autenticação de usuário utilizando `cy.request()` para obter um token de acesso.
- **Requisições Autenticadas:** Uso do token obtido dinamicamente para realizar requisições a endpoints protegidos.
- **Validação de Resposta:** Checagem do status da resposta e da estrutura do corpo (body) retornado pela API.

### 📊 Massa de Dados
- **Fixtures:** Utilização de arquivos de fixtures (`usuarios.json`) para fornecer dados de teste.
- **Testes Orientados a Dados:** Execução de múltiplos cenários de cadastro a partir de uma massa de dados, utilizando `forEach` para iterar sobre os usuários.

## 🧠 Conceitos Aplicados
- **Page Object Model (POM):** Organização do código com separação de responsabilidades, utilizando seletores de elementos e ações de página em classes distintas para maior manutenibilidade e reuso.
- **Comandos Personalizados:** Criação de comandos customizados (`cy.login()`, `cy.register()`) para simplificar e reutilizar lógicas complexas nos testes.
- **Hooks:** Uso de `before` e `beforeEach` para executar pré-condições, como visitar a página ou obter um token de autenticação antes dos testes.
- **Interceptação de Requisições:** Utilização de `cy.intercept()` para simular respostas da API (stubs), permitindo testar cenários de falha do backend, como um erro 400 no login.
- **Autenticação via API:** Abordagem híbrida que combina testes de UI com login via API para agilizar a execução dos testes que necessitam de um usuário autenticado.

## ▶ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) instalado.

### Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/NicolasEL01/cypress_automatizano_testes_e2e.git
cd cypress_automatizano_testes_e2e
npm install
```

### Execução dos Testes
Você pode executar os testes de diferentes maneiras:

**1. Abrir o Cypress Test Runner (Modo Interativo):**
```bash
npx cypress open
```

**2. Executar todos os testes em modo Headless:**
```bash
npx cypress run
```

**3. Executar um arquivo de teste específico em modo Headless:**
```bash
npx cypress run --spec "cypress/e2e/api-mensagens.cy.js"
```

### Relatórios de Teste
Este projeto está configurado com `mochawesome` para gerar relatórios HTML dos resultados dos testes. Os relatórios serão salvos no diretório `cypress/results`.

## 👨‍💻 Autor
**Nicolas Evangelista Leocadio**
- QA | Automação de Testes | Back-end em formação
