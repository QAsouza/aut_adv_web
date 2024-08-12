Feature: Cadastro

@cadastro-negativo
Scenario: Validacao dos campos obrigatorios
Given que o usuario acessou aplicação
When acessar a tela de cadastro
Then quando os campos estiverem vazios o botao "Register" deve ta desabilitado

@cadastro-positivo
Scenario: Efetuando cadastro com sucesso
Given que o usuario esteja na tela de cadastro
When preencher os campos obrigatorios
Then sera habilitado para conclusao do cadastro

@login-negativo
Scenario: Validando botao desabilitado com campos vazios
Given que o usuario acessou app
When o usuario nao inserir nenhuma informacao nos campos
Then o sistema nao ira habilitar o botao de acesso

@login-negativo
Scenario: validando retorno de erros inserindo informacoes incorretas
Given que o usuario esteja na tela de login
When inserir a senha ou o username incorreto
Then o sistema ira retornar erro impedindo o usuario acessar aplicacao

@login-positivo
Scenario: Login com sucesso
Given esteja na tela de login
When inserir as informacoes corretas para login e clicar no botao de login
Then o sistema ira redirecionar o usuario para pagina home da aplicacao com login efetuado

Scenario: Deletando usuario
Given que o usuario esteja logado no sistema
When acessar a tela Minha Conta
Then clicando no botao Deletar o usuariuo sera deletado do sistema

Scenario: Validando o usuario deletado
Given que o usuario foi deletado
When tentar logar no sistema usando as mesma informacoes do usuario deletado
Then o sistema ira retornar que o usuario e senha esteja incorreto