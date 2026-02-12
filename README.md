🐶 Adopet - Testes Automatizados com Cypress

Automação de testes E2E e API da aplicação Adopet, utilizando Cypress.

Projeto desenvolvido para validar fluxos críticos da aplicação, aplicar boas práticas de automação e simular cenários reais de uso.

🧪 Testes Implementados
✅ End-to-End (E2E)

Cadastro (caminho feliz e caminho triste)

Login (sucesso e falha)

Validação de mensagens de erro

Navegação da aplicação

🔌 Testes de API

Login via cy.request()

Captura dinâmica de token

Requisições autenticadas

Validação de status e estrutura de resposta

📊 Massa de Dados

Uso de fixtures

Execução de múltiplos cenários com forEach

Teste orientado a dados (Data-Driven Testing)

🧠 Conceitos Aplicados

Hooks (before, beforeEach)

cy.intercept() (simulação de erro)

Comandos personalizados

Page Object Model (POM)

Autenticação dinâmica via API

Boas práticas de segurança (sem token hardcoded)

▶ Como Executar

Instalar dependências:

npm install


Executar com interface:

npx cypress open


Executar em modo headless:

npx cypress run


Executar teste específico:

npx cypress run --spec "cypress/e2e/api-mensagens.cy.js"

🚀 Diferenciais do Projeto

Integração UI + API

Simulação de erros do back-end

Organização escalável

Código reutilizável

Estrutura pronta para CI/CD

👨‍💻 Autor

Nicolas Evangelista Leocadio
QA | Automação de Testes | Back-end em formação
