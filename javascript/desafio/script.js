var imagem = document.getElementById("lamp");
var ligar = document.getElementById("turnon");
var desligar = document.getElementById("turnoff");
var broken = false;

ligar.addEventListener("click", ligando);
desligar.addEventListener("click", desligando);
imagem.addEventListener("mouseover", ligando);
imagem.addEventListener("mouseout", desligando);
imagem.addEventListener("dblclick", quebrando);


function ligando(){
    if(broken == false){
        imagem.src = "imagens/ligada.jpg"
    }  
}

function desligando(){
    if(broken == false){
        imagem.src = "imagens/desligada.jpg"
    } 
}

function quebrando(){
    imagem.src = "imagens/quebrada.jpg";
    broken = true;
}
