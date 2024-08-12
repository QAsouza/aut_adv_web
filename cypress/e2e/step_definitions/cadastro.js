import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import cadastroPages from "../pages/cadastroPages";


Given ('que o usuario acessou aplicação', () => {
    cadastroPages.acessoApp();
});

When ('acessar a tela de cadastro', () => {
    cadastroPages.acessandoTelaCadastro();
})

Then ('quando os campos estiverem vazios o botao "Register" deve ta desabilitado', () => {
    cadastroPages.validandoCamposVazios();
    cadastroPages.validandoBtDesabilitado();
})

Given ('que o usuario esteja na tela de cadastro', () => {
    cadastroPages.acessoApp();
    cadastroPages.acessandoTelaCadastro();
})

When ('preencher os campos obrigatorios', () => {
    cadastroPages.prenchendoCampos();
})

Then ('sera habilitado para conclusao do cadastro', () => {
    cadastroPages.concluindoCadastro();
})

Given('que o usuario acessou app', () => {
    cadastroPages.acessoApp();
    
})

When('o usuario nao inserir nenhuma informacao nos campos', () => {
    cadastroPages.acessandoTelaLogin();
})

Then('o sistema nao ira habilitar o botao de acesso', () => {
    cadastroPages.validandoCamposVazios();
})

Given ('que o usuario esteja na tela de login', () => {
    cadastroPages.acessoApp();
})

When ('inserir a senha ou o username incorreto', () => {
    cadastroPages.acessandoTelaLogin();
})

Then ('o sistema ira retornar erro impedindo o usuario acessar aplicacao', () => {
    cadastroPages.inserindoDadosIncorretos();
})

Given ('esteja na tela de login', () => {
    cadastroPages.acessoApp();
    cadastroPages.acessandoTelaLogin()
})

When ('inserir as informacoes corretas para login e clicar no botao de login', () => {
    cadastroPages.EfetuandoLogin();
})

Then ('o sistema ira redirecionar o usuario para pagina home da aplicacao com login efetuado', () => {
    cadastroPages.validandoLogin();
})

Given('que o usuario esteja logado no sistema', () => {
    cadastroPages.acessoApp();
    cadastroPages.acessandoTelaLogin();

})

When ('acessar a tela Minha Conta', () => {
    cadastroPages.EfetuandoLogin();
})

Then ('clicando no botao Deletar o usuariuo sera deletado do sistema', () => {
    cadastroPages.deletandoUsuario();
})

Given ('que o usuario foi deletado', () => {
    cadastroPages.acessoApp();
    cadastroPages.acessandoTelaLogin();
})

When ('tentar logar no sistema usando as mesma informacoes do usuario deletado', () => {
    cadastroPages.EfetuandoLogin();
})

Then ('o sistema ira retornar que o usuario e senha esteja incorreto', () => {
    cadastroPages.validanoRetornoErro();
})