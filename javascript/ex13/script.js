function enviei(){
    document.getElementById("altura").style.borderColor = '#ffffff'
    document.getElementById("altura").style.backgroundColor = '#ffffff';
    document.getElementById("peso").style.borderColor = '#ffffff'
    document.getElementById("peso").style.backgroundColor = '#ffffff';
    
    if(document.getElementById("peso").value == ""){
        alert("Preencha o peso.");
        document.getElementById("peso").style.borderColor = 'red'
        document.getElementById("peso").style.backgroundColor = 'red';
        document.getElementById("peso").focus();
        return false
    }

    if(document.getElementById("altura").value == ""){
        alert("Preencha a altura.");
        document.getElementById("altura").style.borderColor = 'red'
        document.getElementById("altura").style.backgroundColor = 'red';
        document.getElementById("altura").focus();
        return false
    }

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso/(altura * altura);
    alert("O seu IMC é: "+ imc);
    return true
}
