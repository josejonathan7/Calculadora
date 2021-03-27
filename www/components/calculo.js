// This is a JavaScript file

var textoDisplay = "";

//primeiro valor das operaçõpes
var valor1 = 0;

//operador 
var operador = "";

function zerarDisplay(){
   textoDisplay = "";
   $(".display").val("");
}

$(document).on("click","#limpa",function(){
   zerarDisplay();
   valor1 = 0;
})


$(document).on("click",".botao",function(){
    textoDisplay += $(this).val();
    $(".display").val(textoDisplay);
})

$(document).on("click",".operacao", function(){
  operador = $(this).html();
  valor1 = textoDisplay;
  zerarDisplay();
})

$(document).on("click","#igual", function(){
   var valor2 = textoDisplay;
   zerarDisplay();

  if(operador == "+")
  {
     textoDisplay = parseFloat(valor1) + parseFloat(valor2);
  }

  if(operador == "-")
  {
     textoDisplay = parseFloat(valor1) - parseFloat(valor2);
  }

  if(operador == "/")
  {
     textoDisplay = parseFloat(valor1) / parseFloat(valor2);
  }

  if(operador == "*")
  {
     textoDisplay = parseFloat(valor1) * parseFloat(valor2);
  }

  $(".display").val(textoDisplay);
})