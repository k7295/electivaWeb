

function obtenerDatosPersonas(){
  var resultado = document.getElementById("informacion");

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
      var datosPersonas = JSON.parse(xmlhttp.responseText);

      if(resultado.innerHTML === ""){

          var contador = 0;
          var tablaPersona = document.getElementById("tablaPersonas");

       for(var i =0;i< datosPersonas.persona.length;i++){
            var persona = datosPersonas.persona[i];
            var nuevaFilaPersona= tablaPersona.insertRow(tablaPersona.rows.length);
            for(var atributo in persona){
                var valor = nuevaFilaPersona.insertCell(contador);
                valor.innerHTML =  persona[atributo];
                contador++;
            }
            contador=0;
            }
        }

      }

    }

  xmlhttp.open("GET", "datos.json", true); //datos.json
  xmlhttp.send();

}

function obtenerDatosPaises(){
  var countryInEnglish = document.getElementById("pais").value;

  var resultado = document.getElementById("informacion");

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
      var datosPaises = JSON.parse(xmlhttp.responseText);

      if(resultado.innerHTML === ""){
          var contador = 0;
          var tablaPais = document.getElementById("tablaPaises");

          for(var i=0; i<datosPaises.length;i++){
            
              var arregloValores = datosPaises[i];
              var nuevaFilaPais = tablaPais.insertRow(tablaPais.rows.length);

              for(atributo in arregloValores){
                  if(atributo==="name" || atributo ==="alpha2Code" || atributo === "capital"|| atributo ==="population"){
                    var nuevoValor = nuevaFilaPais.insertCell(contador);
                    nuevoValor.innerHTML= arregloValores[atributo];
                    contador++;
                  }


          }
              contador=0;

        }

      }

    }
      }

  xmlhttp.open("GET", "https://restcountries.eu/rest/v2/name/"+countryInEnglish, true); //datos.json
  xmlhttp.send();


}
