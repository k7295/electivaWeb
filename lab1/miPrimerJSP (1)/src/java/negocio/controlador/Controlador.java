/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.controlador;

import java.util.List;
import modelo.datos.Departamento;
import modelo.datos.Provincia;
import modelo.datos.TipoTelefono;
import modelo.datos.Persona;
import negocio.gestores.GestorDepartamentos;
import negocio.gestores.GestorPersona;

/**
 *
 * @author ersolano
 */
public class Controlador {
    private GestorDepartamentos gDep;
    private GestorPersona gPersona;

    public Controlador() {
        gDep = new GestorDepartamentos();
        gPersona = new GestorPersona();
    }
    
    public String agregarPersona(String ID, String nombre, Provincia provincia, String numTelefono, TipoTelefono tipoTel, Departamento depto, String direccion){
        Persona persona = new Persona(ID, nombre,provincia,numTelefono,tipoTel,depto,direccion);
        boolean accion = gPersona.agregar(persona);
        String mensaje = (accion ? "Persona agregada" : "Persona duplicada");
        return mensaje;
    }
    
    public Persona consultarPersona(String ID){
        Persona persona = gPersona.consultar(ID);
        return persona;
    }
    
    public String modificarPersona(String ID, String nombre, Provincia provincia, String numTelefono, TipoTelefono tipoTel, Departamento depto,String direccion){
        Persona persona = new Persona(ID,nombre,provincia,numTelefono,tipoTel,depto,direccion);
        boolean accion = gPersona.modificar(persona);
        String mensaje = (accion ? "Persona modificada" : "Persona no existe");
        return mensaje;
    }
    
    public String eliminarPersona(String ID){
        Persona persona = new Persona(ID);
        boolean accion = gPersona.eliminar(persona);
        String mensaje = (accion ? "Persona eliminada" : "Persona no existe");
        return mensaje;
    }  
    
    public String listarPersona(){
        return gPersona.listar();
    }  
    
    public GestorPersona getPersonas(){
        return gPersona;
    }
    //--------------------------------------------------------------------------
    
    public String agregarDepto(String codigo, String nombre){
        Departamento unDepto = new Departamento(codigo, nombre);
        boolean accion = gDep.agregar(unDepto);
        String mensaje = (accion ? "Depto agregado" : "Depto duplicado");
        return mensaje;
    }
    
    
    public Departamento consultarDepto(String codigo){
        Departamento unDepto = gDep.consultar(codigo);
        return unDepto;
    }
    
    public String modificarDepto(String codigo, String nombre){
        Departamento unDepto = new Departamento(codigo, nombre);
        boolean accion = gDep.modificar(unDepto);
        String mensaje = (accion ? "Depto modificado" : "Depto no existe");
        return mensaje;
    }

    public String eliminarDepto(String codigo){
        Departamento unDepto = new Departamento(codigo);
        
        boolean accion = gDep.eliminar(unDepto);
        String mensaje = (accion ? "Depto eliminado" : "Depto no existe");
        return mensaje;
    }    

    public String listarDeptos(){
        return gDep.listar();
    }    
    
    public GestorDepartamentos getDeptos(){
        return  gDep;
    }
}
