Descrição
Este projeto utiliza o Cypress e o Cucumber para realizar testes automatizados WEB. A estrutura é baseada na arquitetura Page Object, o que facilita a manutenção e a escalabilidade dos testes. O projeto inclui testes para validação de WEB, como cadastro de usario, Login e deletar usuario.

Tecnologias Utilizadas
Cypress: Framework de testes end-to-end.
Cucumber: Framework para escrita de testes de aceitação em linguagem natural.
Page Object Pattern: Arquitetura para organizar o código dos testes.
Estrutura do Projeto
cypress.config.js: Configuração do Cypress, incluindo configuração do Cucumber.
cypress/e2e/features/: Diretório onde os arquivos .feature são armazenados.
cypress/e2e/step_definitions/: Diretório onde as definições de passos do Cucumber são armazenadas.
cypress/e2e/page_objects/: Diretório onde os Page Objects são armazenados.
Instalação
Clone o Repositório
Execute o comando
"npm install" (sem aspas) nesse comando ira instalar todas as dependências do projeto
Após instalar as dependências rode o comando "npx cypress open" assim a interface do cypress ira abrir e você pode selecionar o testes a ser executado.
