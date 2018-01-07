<%-- 
    Document   : registroDeptos
    Created on : Dec 14, 2017, 10:35:14 AM
    Author     : ersolano
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%-- esto es una directiva de importacion --%>
<%@page import="modelo.datos.Departamento" %>
<%@page import="negocio.gestores.GestorDepartamentos" %>

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
        <h1>Mantenimiento de Departamentos</h1>
        
        <%-- esto es una declaración de JSP --%>
        <%! String mensaje;%>
        <%! Departamento elDep;%>
        <%! GestorDepartamentos gDep; %>
        
        <%-- scriplet de JSP, para poner puro codigo Java --%>
        <% 
            HttpSession miSession = request.getSession();
            mensaje = (String) miSession.getAttribute("mensaje");
            elDep = (Departamento) miSession.getAttribute("elDep");
            gDep =  (GestorDepartamentos) miSession.getAttribute("gDep");
        %>
        <form name="formDeptos" method="post"action="servletDeptos">
            <table align="center" id="tablaPrincipal">
                <tbody>
                    <tr>
                        <td>Codigo</td>
                        <td>
                            <input type="text" name="txtCodigo" id="txtCodigo" value=<%= (elDep!=null)?elDep.getCodigo():""%>>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>
                            <input type="text" name="txtNombre" id="txtNombre" value= <%=(elDep!=null)?elDep.getNombre():""%>> 
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="center" id="tablaBotones">
                <tbody>
                    <tr>
                        <td><input type="submit" value="Agregar" class="btn btn-default" name="btnAgregar" /></td>
                        <td><input type="submit" value="Consultar" class="btn btn-default" name="btnConsultar" /></td>
                        <td><input type="submit" value="Modificar" class="btn btn-default" name="btnModificar"  /></td>
                        <td><input type="submit" value="Eliminar" class="btn btn-default" name="btnEliminar"  /></td>
                        <td><input type="submit" value="Listar" class="btn btn-default" name="btnListar" /></td>
                        <td><a href="index.html" value="Salir" class="btn btn-default" name="btnSalir" />Salir</a></td>
                    </tr>
                </tbody>
            </table>
            <%-- esto es una expresion de JSP --%>
            <h1><%=mensaje!=null?mensaje:""%></h1>
            
            <%
                if (gDep!=null && gDep.getCantidad()>0)
                {
            %>                    
                <table align="center" id="tablaRes">
                    <thead> 
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <%
                            for (int i=0; i<gDep.getCantidad(); i++) 
                            {
                                Departamento d= gDep.getDepartamento(i);
                        %>
                            <tr>
                                <td> <%=d.getCodigo()%> </td>
                                <td> <%=d.getNombre()%> </td>
                            </tr>
                          <%}%>
                    </tbody>
                </table>
            <%}%>
        </form>
    </body>
    
</html>
