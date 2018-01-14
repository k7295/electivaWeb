// funcion para obtener datos de las personas registradas en el JSON
function obtenerPersonas(){
    var datos = document.getElementById("informacion"); 
   
    var xmlhttp = new XMLHttpRequest(); //Creamos un nuevo objeto de tipo XMLHTTPRequest
    
    /** Creamos una funcion anonima que se va a llamar cada vez que el objeto este listo para cambiar de estado 
     * 0= Acaba de llamarse no se ha inicializado 1= Se hizo la llamada open y se hace el send, 
     * es decir la peticion ha sido establecida 2= Luego de haber hecho llamado el send, es decir ya se envio
     * 3= Cargando la operacion 4 = La operacion ha finalizado */
    xmlhttp.onreadystatechange = function(){ 
        //Solo entra en caso de que la operacion este finalizada y que todo este bien (200)
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){ 
        var datosPersonas = JSON.parse(xmlhttp.responseText);
        
              if(datos.innerHTML === ""){
        
                  var contador = 0;
                  var tablaPersona = document.getElementById("tablaPersonas");
        
                    for(var i =0;i< datosPersonas.persona.length;i++){
                        var persona = datosPersonas.persona[i];
                        var nuevaFilaPersona= tablaPersona.insertRow(tablaPersona.rows.length);

                        for(var elemento in persona){
                            var valor = nuevaFilaPersona.insertCell(contador);
                            valor.innerHTML =  persona[elemento];
                            contador++;
                        }
                        contador=0;
                    }
                }
      }
      //console.log(xmlhttp.readyState);
    }
    xmlhttp.open("GET", "datosPersonas.json", true);
    xmlhttp.send();
  }

  // funcion para obtener datos de paises
  function obtenerPaises(){
    var pais = document.getElementById("pais").value;
    var datos = document.getElementById("informacion"); 
   
    var xmlhttp = new XMLHttpRequest(); //Creamos un nuevo objeto de tipo XMLHTTPRequest
    
    /** Creamos una funcion anonima que se va a llamar cada vez que el objeto este listo para cambiar de estado 
     * 0= Acaba de llamarse no se ha inicializado 1= Se hizo la llamada open y se hace el send, 
     * es decir la peticion ha sido establecida 2= Luego de haber hecho llamado el send, es decir ya se envio
     * 3= Cargando la operacion 4 = La operacion ha finalizado */
    xmlhttp.onreadystatechange = function(){ 
        //Solo entra en caso de que la operacion este finalizada y que todo este bien (200)
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){ 
        var datosPais = JSON.parse(xmlhttp.responseText);
        
              if(datos.innerHTML === ""){
        
                  var contador = 0;
                  var tablaPais = document.getElementById("tablaPaises");
                    
                    for(var i=0; i<datosPais.length;i++){
                        
                          var arregloValores = datosPais[i];
                          var nuevaFilaPais = tablaPais.insertRow(tablaPais.rows.length);
            
                          for(elemento in arregloValores){
                              if(elemento === "name" || elemento ==="alpha2Code" || elemento === "capital"
                                 || elemento ==="population"){
                                var nuevoValor = nuevaFilaPais.insertCell(contador);
                                nuevoValor.innerHTML= arregloValores[elemento];
                                contador++;
                              }
            
            
                      }
                          contador=0;
            
                    }
            }
      }
      //console.log(xmlhttp.readyState);
    }
    xmlhttp.open("GET", "https://restcountries.eu/rest/v2/name/"+pais, true);
    xmlhttp.send();
  }