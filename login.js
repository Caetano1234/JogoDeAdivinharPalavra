function login(){
    var jogador1 = document.getElementById("nomeJogador1").value
    var jogador2 = document.getElementById("nomeJogador2").value
    localStorage.setItem("jogador1", jogador1)
    localStorage.setItem("jogador2", jogador2)
    window.location="jogo.html"
}