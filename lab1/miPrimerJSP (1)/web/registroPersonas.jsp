<%-- 
    Document   : registroPersonas
    Created on : 15/12/2017, 09:51:49 AM
    Author     : Curso
--%>

<%@page import="modelo.datos.Departamento"%>
<%@page import="negocio.gestores.GestorDepartamentos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%-- esto es una directiva de importacion --%>
<%@page import="modelo.datos.Persona" %>
<%@page import="modelo.datos.Provincia" %>
<%@page import="modelo.datos.TipoTelefono" %>
<%@page import="negocio.gestores.GestorPersona" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Mi Primer Intento en JSP</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
    </head>
    <body>
        <h1>Mantenimiento de Personas</h1>
        
        <%-- esto es una declaración de JSP --%>
        <%! String mensaje;%>
        <%! Persona persona;%>
        <%! Provincia provincia;%>
        <%! TipoTelefono tipoTel;%>
        <%! GestorPersona gPer; %>
        <%! GestorDepartamentos gDep; %>
        
        <%-- scriplet de JSP, para poner puro codigo Java --%>
        <% 
            HttpSession miSession = request.getSession();
            mensaje = (String) miSession.getAttribute("mensaje");
            persona = (Persona) miSession.getAttribute("persona");
            provincia = (Provincia) miSession.getAttribute("provincia");
            tipoTel =  (TipoTelefono) miSession.getAttribute("tipoTel");
            gPer =  (GestorPersona) miSession.getAttribute("gPer");
            gDep = (GestorDepartamentos) miSession.getAttribute("gDep");
        %>
        <form name="formPer" method="post" action="servletPersonas">
            <table align="center" id="tablaPrincipal">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>
                            <input type="text" name="txtID" id="txtID" value=<%= (persona!=null)?persona.getId():""%>>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>
                            <input type="text" name="txtNombre"  id="txtNombre"  value= <%=(persona!=null)?persona.getNombre():""%>> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Direccion</td>
                        
                        <td><input type="text" name="txtdireccion" id="txtdireccion" value= <%=(persona!=null)?persona.getDireccion() :""%> ></td>
                    </tr>
                    <tr>
                        
                        <td>Provincia</td>
                        <td>
                            <select name="provincia">
                                <option value="SanJose">San José</option>
                                <option value="Alajuela">Alajuela</option>
                                <option value="Heredia">Heredia</option>
                                <option value="Cartago">Cartago</option>
                                <option value="Puntarenas">Puntarenas</option>
                                <option value="Guanacaste">Guanacaste</option>
                                <option value="Limon">Limón</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Numero de Telefono</td>
                        <td>
                            <input type="text" name="txtNumTelefono" id="txtNumTelefono" value= <%=(persona!=null)?persona.getNumTelefono():""%> >
                            <select name="tipoTelefono">
                                <option value="Movil">Móvil</option>
                                <option value="Residencial">Residencia</option>
                                <option value="Trabajo">Oficina</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Departamentos</td>
                        <td>
                            <select name="departamentos">
                                
                                <%
                                if (gDep!=null && gDep.getCantidad()>0)
                                {
                                    for (int i=0; i<gDep.getCantidad(); i++) 
                                        {
                                            String dep =gDep.getDepartamento(i).getCodigo();
                                %>
                                    <option value=<%=(gDep!=null)?dep:""%>><%=dep%></option>
                                <%
                                    }
                                }
                                else{
                                %>
                                <option></option>
                                <% }%>
                            </select>
                        </td>
                    </tr>
                    
                </tbody>
               
            </table>
            <table align="center" id="tablaBotones" padding-top="20px">
                <tbody>
                    <tr>
                        <td><input type="submit" value="Agregar" class="btn btn-default" name="btnAgregar" onclick="return validatePhone()" /></td>
                        <td><input type="submit" value="Consultar" class="btn btn-default" name="btnConsultar" onclick="return validate_ID()"/></td>
                        <td><input type="submit" value="Modificar" class="btn btn-default" name="btnModificar" onclick="return validatePhone()" /></td>
                        <td><input type="submit" value="Eliminar" class="btn btn-default" name="btnEliminar" onclick="return validate_ID()" /></td>
                        <td><input type="submit" value="Listar" class="btn btn-default" name="btnListar" /></td>
                        <td><a href="index.html" value="Salir" class="btn btn-default" name="btnSalir" />Salir</a></td>
                     </tr>
                </tbody>
            </table>
    </form>
            <h1><%=mensaje!=null?mensaje:""%></h1>
            
            <%
                if (gPer!=null && gPer.getCantidad()>0)
                {
            %>                    
                <table align="center" id="tablaPrincipal" >
                    <thead> 
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Provincia</th>
                            <th>Numero de Telefono</th>
                            <th>Tipo de Telefono</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <%
                            for (int i=0; i<gPer.getCantidad(); i++) 
                            {
                                Persona p = gPer.getPersona(i);
                        %>
                            <tr>
                                <td> <%=p.getId()%> </td>
                                <td> <%=p.getNombre()%> </td>
                                <td> <%=p.getDireccion() %> </td>
                                <td> <%=p.getProvincia().toString() %> </td>
                                <td> <%=p.getNumTelefono() %> </td>
                                <td> <%=p.getTipoTel().toString() %> </td>
                                <td> <%=p.getDepto().getNombre() %> </td>
                            </tr>
                          <%}%>
                    </tbody>
                </table>
            <%}%>
        </form>
    </body>
    <script type="text/javascript">
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
        
        function validate_ID() {
                
                var cod = document.forms["formPer"]["txtID"].value;
                
                if(cod.length !== 0)
                {
                    return true;
                }
                else
                {
                    alert("Debe ingresar el ID");
                    return false;
                }
        }
    </script>
        
</html>
