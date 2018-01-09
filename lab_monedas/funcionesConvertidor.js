var cargar = 0;


/*funcion para mostrar todas las divisas */
function cargarDatos(){
    var cars = [2,3,4];
    var icons = ["glyphicon glyphicon-plus","glyphicon glyphicon-eur","glyphicon glyphicon-cloud"];
    for (i = 0; i < cars.length; i++) { 
      var li = document.createElement("li");
      li.className = "list-group-item";
      
      var inputValue = cars[i];
      var t = document.createTextNode(inputValue);

      var icon = document.createElement("i");
      icon.className = icons[i];

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
      checkbox.value= icons[i];
      
     

      var IconCheck = document.createElement("span");
      IconCheck.className = "glyphicon glyphicon-star";
      
      //...........................

      labelCheckBox.appendChild(checkbox);
      labelCheckBox.appendChild(IconCheck);

      div.appendChild(labelCheckBox);

      li.appendChild(div);
      li.appendChild(icon);
      li.appendChild(t);
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
    var icons = ["glyphicon glyphicon-plus","glyphicon glyphicon-eur","glyphicon glyphicon-cloud"];
    console.log(checkboxSelect);

    if(checkboxSelect.length == 0){
        document.getElementById("prueba").innerHTML = "No hay elementos";
    }
    else{
       
        document.getElementById("prueba").innerHTML = "";
        for (i = 0; i < checkboxSelect.length; i++) { 

            var li = document.createElement("li");
            li.className = "list-group-item";
            li.id = "list-group-fav";
            
            var inputValue = checkboxSelect[i];
            var t = document.createTextNode(inputValue);
      
            var icon = document.createElement("i");
            icon.className = icons[i];
      
            li.appendChild(icon);
            li.appendChild(t);
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
    
    /*

    if (x.style.display === "none") {
        x.style.display = "block";
        var myobject = {
            ValueA : 'Text A',
            ValueB : 'Text B',
            ValueC : 'Text C'
        };
        
       
    } else {
        x.style.display = "none";
        //eliminamos todos los ementos que contengan la etiqueta <li>
        $('li').remove();
        
    }*/

    
}

/* funcion para esconder las divisas disponibles */ 

function ocultarDivisas() {
    var x = document.getElementById("myDIV");
    $('#myDIV').hide();
}

/* funcion para anadir favoritos*/

function addFavorite(){
    
    var checkboxSelect = [];
    // obtener los checkbox que estan seleccionados
    $("input:checkbox:checked").each(   
        function() {
            checkboxSelect.push($(this).val());
            //console.log($(this));
            //alert("El checkbox con valor " + $(this).val() + " está seleccionado");
        }
        
    );
    //console.log(checkboxSelect);
    return checkboxSelect;
    
}

/* */

function prueba(){
    console.log(addFavorite());
}