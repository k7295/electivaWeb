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
import modelo.datos.Departamento;
import negocio.controlador.Controlador;
import negocio.controlador.SingletonSoyUnico;

/**
 *
 * @author ersolano
 */
@WebServlet(name = "servletDeptos", urlPatterns = {"/servletDeptos"})
public class servletDeptos extends HttpServlet {

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
            String codigo = request.getParameter("txtCodigo");
            String nombre = request.getParameter("txtNombre");
            if (codigo.isEmpty() || nombre.isEmpty()) {
                laSesion.setAttribute("mensaje", "AGREGAR-datos son nulos");
            } else {
                String mensaje = SingletonSoyUnico.getInstance().getController().agregarDepto(codigo, nombre);
                laSesion.setAttribute("mensaje", mensaje);
            }
        }

        if (request.getParameter("btnConsultar") != null) {
            String codigo = request.getParameter("txtCodigo");
            if (codigo.isEmpty()) {
                laSesion.setAttribute("mensaje", "CONSULTAR-codigo es nulo");
            } else {
                Departamento elDep = SingletonSoyUnico.getInstance().getController().consultarDepto(codigo);
                laSesion.setAttribute("elDep", elDep);
                laSesion.setAttribute("mensaje", elDep!= null ? "Departamento Recuperado" : "Departamento no existe");
            }
        }

        if (request.getParameter("btnModificar") != null) {
            String codigo = request.getParameter("txtCodigo");
            String nombre = request.getParameter("txtNombre");
            if (codigo.isEmpty() || nombre.isEmpty()) {
                laSesion.setAttribute("mensaje", "MODIFICAR-codigo y nombre son nulos");
            } else {
                laSesion.setAttribute("mensaje", SingletonSoyUnico.getInstance().getController().modificarDepto(codigo, nombre));
            }
        }

        if (request.getParameter("btnEliminar") != null) {
            String codigo = request.getParameter("txtCodigo");
            if (codigo.isEmpty()) {
                laSesion.setAttribute("mensaje", "ELIMINAR-codigo es nulo");
            } else {
                laSesion.setAttribute("mensaje", SingletonSoyUnico.getInstance().getController().eliminarDepto(codigo));
            }
        }

        if (request.getParameter("btnListar") != null) {
            laSesion.setAttribute("mensaje", SingletonSoyUnico.getInstance().getController().listarDeptos());
        }
        
        
        laSesion.setAttribute("gDep", SingletonSoyUnico.getInstance().getController().getDeptos());
        //redirige la salida a la pagina
        response.sendRedirect("registroDeptos.jsp");
        
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
