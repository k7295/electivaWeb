/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 function validatePhone() {
    var str = document.forms["formPer"]["txtNumTelefono"].value;
    var cod = document.forms["formPer"]["txtID"].value;
    var dir = document.forms["formPer"]["txtdireccion"].value;
    var nom = document.forms["formPer"]["txtNombre"].value;
    if(str.length === 8 && cod.length !== 0 && dir.lenght !== 0 && nom.length !== 0)
    {
    	return true;
    }
    else
    {
    	alert("TODOS los campos deben contener información, además, el número de telefono solo debe contener 8 caracteres.");
        return false;
    }
}