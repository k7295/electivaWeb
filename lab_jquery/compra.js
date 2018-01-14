
$(document).ready(function(){

    // llenar el select con datos
   cargarSelect();
    
    
    //console.log(Object.keys(accesorios).length);
        $("#boton").click(function(){
            addRow();
            //console.log(Object.keys(accesorios));
        });
});

function cargarSelect(){
    for (var keyAccesorio in accesorios) {
        var objetoSelect = $("<option  value = "+ keyAccesorio+">"+ accesorios[keyAccesorio].etiqueta + " (" + accesorios
        [keyAccesorio].precio+"€ )" +"</option>");

        $("#accesorios").append(objetoSelect);
        /*for (var keyValor in accesorios[keyAccesorio]) {
            console.log(' name=' + keyAccesorio + "  " +keyValor+": " + accesorios[keyAccesorio][keyValor]);
         }*/   
     }
}

function addRow(){
    //console.log($("#accesorios").val());

    // obtener datos 
    var accesorioSelect = $("#accesorios").val();
    var etiqueta = accesorios[accesorioSelect].etiqueta;
    var cantidad = $("#cantidad").val();
    var precio = Number(accesorios[accesorioSelect].precio) * Number(cantidad);
    var cant_ = 0;
    var precio_ = 0
    
    // agrupar datos 
    var cont_accesorios = ($('#compra tbody tr').filter('.'+accesorioSelect).length); // obtengo la cantidad de veces que esta ese articulo. 
    if(cont_accesorios == 0){ // el accesorio no esta en la tabla
        console.log("crear row");
        var celda = "<tr class =" + accesorioSelect +"><td>"+ 
                    etiqueta +"</td><td id=cant_"+accesorioSelect+">" + cantidad  + 
                    "</td><td id=precio_"+accesorioSelect+">" + precio + "</td></tr>";
                
        $("#total").before(celda);
    }
    else{ // el accesrio esta en la lista asi que se agrupan los datos
       // console.log("agrupar row");
        console.log($('#cant_'+accesorioSelect).text());
        
        $('#cant_'+accesorioSelect).each(function() {
            cant_ = Number($(this).html());
             
        });
        $('#precio_'+accesorioSelect).each(function() {
            precio_ = Number($(this).html());
                
        });

        
        $('#cant_'+accesorioSelect).text( Number(cantidad) + cant_);
        $('#precio_'+accesorioSelect).text(Number(precio) + precio_);
    }

    // total de la compra 
    var totalCompra = 0;
    $("#totalval").each(function() {
        totalCompra = Number($(this).html());
    });
    $("#totalval").text(Number(totalCompra)+precio);
    $("#cantidad").val(1); // resetear el input de cantidad de articulos
   
}

