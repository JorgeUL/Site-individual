// Index
function entrar_sobre() {
    window.location.href = "sobre.html";
}

function entrar_cadastro() {
    window.location.href = "cadastro.html";
}

// Suporte
function enviar() {
    if(nome.value == "" || email.value == "" || pergunta_text.value == "") {
        alert("Preencha todos os campos")
    } else {
    alert("Sua dúvida foi enviada e em breve será respondida através de seu e-mail!")
    nome.value = "";
    email.value = "";
    pergunta_text.value = "";
    }
}

// Dashboard
let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}

function funciona() {
    alert("Para entender como funciona, clique nos titulos de cada bloco que será explicado cada um!")
}

function video() {
    alert("Aqui, você verá tutoriais/dicas por vídeos de youtube recomendado com base no seu pacote! Outra leva será apresentada assim que todos os videos forem vistos.")
}

function treino() {
    alert("Aqui, você terá uma lista diária de treinos para te manter em forma! Eles são treinos fixos diários, então tente ao máximo manter essa rotina!")
}

function assinaturas() {
    alert("Aqui, você encontra algumas assinaturas que você pode estar fazendo para evoluir no cs!")
    alert("Gamersclub - Aqui você irá ter acesso ao premium do site gamersclub, onde você ira poder jogar a hora que quiser além de ter acesso ao gamesacademy, onde terá aulas gravadas para uma maior evolução (beneficios descritos na assinatura!)")
    alert("Canais do youtube - Alguns canais que você pode seguir. Tem uma lista grande de canais que possuem como conteudo principal o cs, e, que vão te ajudar bastante ou te divertir!")
    alert("Canais da twitch- Aqui você encontra alguns canais de transmissão ao vivo que fazem diversos conteudos de cs (Ao lado dos nomes é citado a ligação do canal com o cs. Ex: Fallen, jogador profissional de csgo!")
}