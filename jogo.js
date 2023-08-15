var jogador1 = localStorage.getItem("jogador1");
var jogador2 = localStorage.getItem("jogador2");

var pontos1 = 0;
var pontos2 = 0;

document.getElementById("vezDaRespostaJogador").innerHTML = "Vez da resposta: " + jogador2
document.getElementById("vezDaPerguntaJogador").innerHTML = "Vez da pergunta: " + jogador1

var palavra;
var pegarPalavra;

document.getElementById("nomeJogador1").innerHTML = jogador1 + ": ";
document.getElementById("nomeJogador2").innerHTML = jogador2 + ": ";
document.getElementById("pontosJ1").innerHTML = pontos1;
document.getElementById("pontosJ2").innerHTML = pontos2;

document.getElementById("vezDaPerguntaJogador").innerHTML = jogador1;
document.getElementById("vezDaRespostaJogador").innerHTML = jogador2;

function enviar(){
    pegarPalavra = document.getElementById("palavra").value;

    if(pegarPalavra.length < 5){
        document.getElementById("aviso").innerHTML = "Insira uma palavra com pelo menos 5 letras";
        document.getElementById("palavra").value = "";
    }
    else{
        document.getElementById("aviso").innerHTML = "";
        document.getElementById("palavra").value = "";
        palavra = pegarPalavra.toLowerCase();
        console.log(palavra);
    
        letra1 = palavra.charAt(0)
        letra2 = palavra.charAt(Math.floor(palavra.length / 2))
        letra3 = palavra.charAt(palavra.length - 1)

        exibirPalavra = palavra.replace(letra1, "_")
        exibirPalavra = exibirPalavra.replace(letra2, "_")
        exibirPalavra = exibirPalavra.replace(letra3, "_")
    
        saida = document.getElementById("output")
        
        palavraPergunta = `<h4 id="mostrarPalavra"> Palavra: ${exibirPalavra} </h4>`
        inserirChute = `<input type="text" id="resposta">`
        botaoChecarResposta = `<button onclick="checar()" class="btn btn-info"> Checar </button>`
    
        saida.innerHTML = palavraPergunta + inserirChute + botaoChecarResposta
    } 
}
 
var vezPergunta = "J1"
var vezResposta = "J2"

function checar(){
    var PegarResposta = document.getElementById("resposta").value
    var resposta = PegarResposta.toLowerCase()

    if(resposta == palavra){
        if(vezResposta == "J1"){
            pontos1++
            document.getElementById("pontosJ1").innerHTML = pontos1
        }
        else{
            pontos2++
            document.getElementById("pontosJ2").innerHTML = pontos2
        }
    }

    if(vezPergunta = "J1"){
        vezPergunta = "J2"
        document.getElementById("vezDaPerguntaJogador").innerHTML = jogador2
        vezResposta = "J1"
        document.getElementById("vezDaRespostaJogador").innerHTML = jogador1
    } else{
        vezPergunta = "J1"
        document.getElementById("vezDaPerguntaJogador").innerHTML = jogador1
        vezResposta = "J2"
        document.getElementById("vezDaRespostaJogador").innerHTML = jogador2
    }
}