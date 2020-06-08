
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimeno"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("http://globo.com"); //Abra uma nova janela
    //window.location.href = "http://globo.com";  //Abre na mesma tela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }  
        return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//function setReplace(frase, nome, novo_nome){
  //  return frase.replace(nome, novo_nome)
//}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));



/* Trabalhando com data:
var d = new Date();
alert(d.getMonth()+1);  //O getMonth sempre vai puxar do zero.
alert(d.getUTCMinutes());
alert(d.getDay());
alert(d.getHours());
*/


/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1; //é igual a count++
}
*/

/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade > 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");   //Acrescenta o elemento "uva" no array
//lista.pop();   //Remove o último elemento do array
//console.log(lista.length);  //Mostra o tamanho do array
//console.log(lista.reverse());  //Mostra a lista ao contrário
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(lista[1]);

//var nome = "Marcio Cotrim";
//var idade = 45;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão", "Brasil"));

