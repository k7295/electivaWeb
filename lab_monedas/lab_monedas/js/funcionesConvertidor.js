
var cargar = 0;
var monedaSim = new Array(
    "₡",
    "؋",
    "L",
    "$",
    "$",
    "Bs.",
    "R$",
    "¥",
    "$",
    "$",
    "£",
    "₡", 
    "L",
    "﷼",
    "ع.د",
    "¥",
    "$",
    "C$",
    "₨",
    "B/.",
    "₽",
    "Fr",
    "--",
    "£",
    "$",
    
);

var paises = new Array(
    "Costa Rica",
    "Afghanistan", 
    "Albania", 
    "Argentina", 
    "Australia",
    "Bolivia", 
    "Brazil",
    "China", 
    "Colombia", 
     
    "Cuba",
    "Egypt",
    "El Salvador", 
    "Honduras", 
    "Iran", 
    "Iraq", 
    //"Italy", ITL
    "Japan", 
    "Mexico" ,
    "Nicaragua", 
    "Pakistan", 
    "Panama", 
    "Russia",
    "Rwanda",
    "Turkey", 
    "United Kingdom", 
    "United States"
    
);
var banderas = new Array(
    "flag cr",
    "flag af",
    "flag al",
    "flag ar",
    "flag au",
    "flag bo",
    "flag br",
    "flag cn",
    "flag co",
    
    "flag cu",
    "flag eg",
    "flag sv",
    "flag hn",
    "flag in",
    "flag iq",
    "flag jp",
    "flag mx",
    "flag ni",
    "flag pk",
    "flag pa",
    "flag ru",
    "flag rw",
    "flag tr",
    "flag eu",
    "flag us",
    //"flag zm",
    
    
);

var siglasPais = new Array(
    "CRC",
    "AFN",
    "ALL",
    "ARS",
    "AUD",
    "BOB",
    "BRL",
    "CNH",
    "COP",
    
    "CUP",
    "EGP",
    "SVC",
    "HNL",
    "IRR",
    "IQD",
    "JPY",
    "MXN",
    "NIO",
    "PRK",
    "PAB",
    "RUB",
    "RWF",
    "TRY",
    "GBP",
    "USD"
  );
  


/** Funcion para manipular el JSON */
function getRates()
{
    xmlhttp.open("GET", 'https://openexchangerates.org/api/latest.json?app_id=aad807292cb3477f9bf7ccf077984a42', true);
    xmlhttp.send();
}

var xmlhttp = new XMLHttpRequest();
var currencies;
xmlhttp.onreadystatechange = function() {
    currencies= new Object();
    var pos = 0;
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for (i=0 ; i < siglasPais.length ; i++)//var key in  myObj.rates) 
        {
            if (myObj.rates.hasOwnProperty(siglasPais[i])) 
            {
                currencies[pos] = myObj.rates[siglasPais[i]];
                //console.log(currencies[pos]);
            }
            pos++;
        }
    }
}


/*funcion para mostrar todas las divisas */
function cargarDatos(){
    getRates(); // cargar los datos del JSONs
  
    for (i = 0; i < paises.length; i++) { 
      var li = document.createElement("li");
      li.className = "list-group-item";
      
      var inputValue = paises[i];
      var t = document.createTextNode(inputValue);
      

      var siglas = siglasPais[i];
      var moneda = monedaSim[i];
      var tSiglas = document.createTextNode("   (" + siglas + ")   " + "   (" + moneda + ")   ");
      

      var icon = document.createElement("i");
      icon.className = banderas[i];

     //.............. checkbox
     var div = document.createElement("div");
     div.className = "btn-group";
     div.setAttribute("data-toggle","buttons");
     div.getAttribute("data-toggle");
     

      var labelCheckBox = document.createElement("label");
      labelCheckBox.className = "btn btn-warning"

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.autocomplete = "off";
      checkbox.value= paises[i];
      checkbox.id = i;

      // Costar Rica marcada como favorita 
      if(siglas == "CRC"){
          console.log("predeterminado");
          checkbox.checked = true;
          labelCheckBox.className = "btn btn-warning active";
      }
      
      var IconCheck = document.createElement("span");
      IconCheck.className = "glyphicon glyphicon-star";
      
      //...........................

      labelCheckBox.appendChild(checkbox);
      labelCheckBox.appendChild(IconCheck);

      div.appendChild(labelCheckBox);

      li.appendChild(div);
      li.appendChild(t);
      li.appendChild(tSiglas);
      li.appendChild(icon);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        
        document.getElementById("myUL").appendChild(li);
      }
    }   
}

/*funcion para mostrar las divisas favoritas */
function cargarFavoritos(){
    //$("#list-group-fav").remove();
    $("#myFav").empty();
    var checkboxSelect = addFavorite();
    var paisesFav = checkboxSelect[1];
    var banderaFav = checkboxSelect[0];

    console.log(checkboxSelect);
    

    if(checkboxSelect.length == 0){
        document.getElementById("prueba").innerHTML = "No hay elementos";
    }
    else{
       
        document.getElementById("prueba").innerHTML = "";
        for (i = 0; i < paisesFav.length; i++) { 

            var li = document.createElement("li");
            li.className = "list-group-item";
            li.id = "list-group-fav";
            
            var inputValue = paisesFav[i];
            
            var t = document.createTextNode(inputValue);

            var siglas = siglasPais[banderaFav[i]];
            var tSiglas = document.createTextNode("   (" + siglas + ")   ");
      
            var icon = document.createElement("i");
            icon.className = banderas[banderaFav[i]];

            var input = document.createElement("input");
            input.className = "form-control";
            input.type = "number";
            input.id = siglasPais[banderaFav[i]];
            input.value = 0;
      
            li.appendChild(icon);
            li.appendChild(t);
            li.appendChild(tSiglas);
            li.appendChild(input);

            if (inputValue === '') {
              alert("You must write something!");
            } else {
              
              document.getElementById("myFav").appendChild(li);
            }
        }   
    }
    
}


/* funcion para mostrar las divisas disponibles */ 
 
function mostrarDivisas() {
    if(cargar == 0){
        cargarDatos();
    }
    cargar++;
    var x = document.getElementById("myDIV");
    $('#myDIV').show();
    
}

/* funcion para esconder las divisas disponibles */ 

function ocultarDivisas() {
    var x = document.getElementById("myDIV");
    $('#myDIV').hide();
}

/* funcion para anadir favoritos*/

function addFavorite(){
    
    var checkboxSelect = [];
    var idPais = [];
    var respuesta = new Array();
    // obtener los checkbox que estan seleccionados
    $("input:checkbox:checked").each(   
        function() {
            checkboxSelect.push($(this).val());
            idPais.push($(this).attr('id'));
            //console.log($(this).);
            //alert("El checkbox con valor " + $(this).val() + " está seleccionado");
        }
        
    );
    respuesta[0]=idPais;
    respuesta[1]=checkboxSelect;
    //console.log(checkboxSelect);
    return respuesta;
    
}

/** funcion para validar que solo haya un input con un valor mayor a 0 */
function validarInputs(){
    var varValido = 0;
    var checkboxSelect = addFavorite();
    var paisesSeleccionadosID = checkboxSelect[0];
   // console.log(paisesSeleccionadosID);  
    document.getElementById("prueba").innerHTML = "";

    for (i = 0; i < paisesSeleccionadosID.length; i++) { 
        var idSigla = siglasPais[paisesSeleccionadosID[i]];
        
        var valor = document.getElementById(idSigla).value;
        //console.log(valor);
        if(valor > 0){
            varValido++;
        }

    }
    
    if(varValido == 1){
        return true;
    }
    else{
        alert("Solo debe haber un campo distinto a 0 (la moneda que desea convertir) y los valores deben ser mayores a 0");
        Resetear();
        return false;
    }
    
}

/** funcion para obtener el input por cambiar */
function obtenerValor(){
    var checkboxSelect = addFavorite();
    var paisesSeleccionadosID = checkboxSelect[0];
    var valInputs = validarInputs();
    //console.log(valInputs);
    var respuesta = new Array();
    if(valInputs){
        for (i = 0; i < paisesSeleccionadosID.length; i++) { 
            var idSigla = siglasPais[paisesSeleccionadosID[i]];
            var valor = document.getElementById(idSigla).value
            if(valor > 0){
                
                respuesta[0] = paisesSeleccionadosID[i];
                respuesta[1] = document.getElementById(idSigla);
                respuesta[2] = valor;
                console.log(respuesta);
                return respuesta;
            }
    
        }
    }
}

/** inicializar Valores deos iputs */
 function Resetear(){
    var checkboxSelect = addFavorite();
    var paisesSeleccionadosID = checkboxSelect[0];
    
        for (i = 0; i < paisesSeleccionadosID.length; i++) { 
            var idSigla = siglasPais[paisesSeleccionadosID[i]];
            var input = document.getElementById(idSigla);
            input.value=0;
        }
 }

/* Funcion para hacer la conversion de monedas*/
function Convertir(){
    //$("#list-group-fav").remove();
   
    var checkboxSelect = addFavorite();
    var idPaises = checkboxSelect[0];
    var paisesSeleccionados = checkboxSelect[1];
    var valInputs = obtenerValor();
    console.log(currencies);
   // console.log(valInputs);

    
    for (i = 0; i < paisesSeleccionados.length; i++) { 
        var idSigla = siglasPais[idPaises[i]];
        var idElemento = document.getElementById(siglasPais[idPaises[i]]); 
        var valor = document.getElementById(idSigla);

        var valorInicial = 0;
        var valorInicialLista = 0 ;
        var monedaConvertir = 0;
        //console.log(idElemento.id);
       // console.log(valor);
        if(idElemento.id != valInputs[1].id){
            /* funcion de conversion*/

            /**
             *   valorInicial (1)        | x
             *   valorInicialLista    | monedaConvertir 
             */
            // pasar a dolares el valor que se ingresa
            valorInicial = valInputs[2];
            valorInicialLista = currencies[valInputs[0]];
            monedaConvertir = 1;//currencies[valInputs[0]];

            console.log(valorInicial);
            console.log(valorInicialLista);
            console.log(monedaConvertir);

            var valorDolares = (valorInicial*monedaConvertir)/valorInicialLista;

            // pasar al valor destino 
            valorInicial = valorDolares;
            valorInicialLista = 1;
            monedaConvertir = currencies[idPaises[i]];

            console.log(valorInicial);
            console.log(valorInicialLista);
            console.log(monedaConvertir);

            var res =  ((valorInicial*monedaConvertir)/valorInicialLista);
            console.log(res);
            valor.value = res;
        }

    }

}

