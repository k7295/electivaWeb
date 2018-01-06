/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import modelo.datos.Persona;
import modelo.datos.Departamento;
import modelo.datos.Provincia;
import modelo.datos.TipoTelefono;
import negocio.controlador.SingletonSoyUnico;

/**
 *
 * @author ersolano
 */
@WebServlet(name = "servletPersonas", urlPatterns = {"/servletPersonas"})
public class servletPersonas extends HttpServlet {

//    private Controlador controller = new Controlador();
    
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       

        // recupera la sesion actual
        HttpSession laSesion = request.getSession();

        if (request.getParameter("btnAgregar") != null) {
            
            String ID = request.getParameter("txtID");
            String nombre = request.getParameter("txtNombre");
            String numTel = request.getParameter("txtNumTelefono");
            String tipotelefono = request.getParameter("tipoTelefono");
            String depto = request.getParameter("departamentos");
            String provincia = request.getParameter("provincia");
            String direccion = request.getParameter("txtdireccion");
            
            TipoTelefono tipoTel = TipoTelefono.valueOf(tipotelefono);
            Provincia nombreProvincia = Provincia.valueOf(provincia);
            
            Departamento tempDepto = new Departamento();
            
            try{
                tempDepto = SingletonSoyUnico.getInstance().getController().consultarDepto(depto);
            }
            catch(Exception e){
                laSesion.setAttribute("mensaje", e.getMessage().toString());
            }
           
            if (ID.isEmpty() || nombre.isEmpty() || numTel.isEmpty()) {
                laSesion.setAttribute("mensaje", "AGREGAR-datos son nulos");
            } else {
                String mensaje = SingletonSoyUnico.getInstance().getController().agregarPersona(ID, nombre, nombreProvincia, numTel, tipoTel,tempDepto,direccion);
                laSesion.setAttribute("mensaje", mensaje);
            }
        }
       //------------------------
       if (request.getParameter("btnConsultar") != null) {
            String ID = request.getParameter("txtID");
            if (ID.isEmpty()) {
                laSesion.setAttribute("mensaje", "CONSULTAR-codigo es nulo");
            } else {
                Persona persona = SingletonSoyUnico.getInstance().getController().consultarPersona(ID);
                laSesion.setAttribute("Persona", persona);
                laSesion.setAttribute("mensaje", persona!= null ? "Persona Recuperado" : "Persona no existe");
            }
        }

       //-------------------------
       
        if (request.getParameter("btnModificar") != null) {
            String ID = request.getParameter("txtID");
            String nombre = request.getParameter("txtNombre");
            String numTel = request.getParameter("txtNumTelefono");
            String tipotelefono = request.getParameter("tipoTelefono");
            String depto = request.getParameter("departamentos");
            String provincia = request.getParameter("provincia");
            String direccion = request.getParameter("txtdireccion");
            
            TipoTelefono tipoTel = TipoTelefono.valueOf(tipotelefono);
            Provincia nombreProvincia = Provincia.valueOf(provincia);
            
            Departamento tempDepto = new Departamento();
            
            try{
                tempDepto = SingletonSoyUnico.getInstance().getController().consultarDepto(depto);
            }
            catch(Exception e){
                laSesion.setAttribute("mensaje", e.getMessage().toString());
            }
           
            if (ID.isEmpty() || nombre.isEmpty() || numTel.isEmpty()) {
                laSesion.setAttribute("mensaje", "MODIFICAR-datos son nulos");
            } else {
                String mensaje = SingletonSoyUnico.getInstance().getController().modificarPersona(ID, nombre, nombreProvincia, tipotelefono, tipoTel, tempDepto,direccion);
                laSesion.setAttribute("mensaje", mensaje);
            }

        }
        
        //------------------------
        if (request.getParameter("btnEliminar") != null) {
            String codigo = request.getParameter("txtID");
            if (codigo.isEmpty()) {
                laSesion.setAttribute("mensaje", "ELIMINAR-codigo es nulo");
            } else {
                laSesion.setAttribute("mensaje", SingletonSoyUnico.getInstance().getController().eliminarPersona(codigo));
            }
        }
        
        //------------------------
        if (request.getParameter("btnListar") != null) {
            laSesion.setAttribute("mensaje", SingletonSoyUnico.getInstance().getController().listarPersona());
        }
        
       
        laSesion.setAttribute("gPer",SingletonSoyUnico.getInstance().getController().getPersonas());
        //redirige la salida a la pagina
        response.sendRedirect("registroPersonas.jsp");
         
        if(request.getParameter("btnSalir") != null){
            request.getSession().invalidate();
        }
        
        
        }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
