/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.gestores;

import modelo.datos.Persona;

/**
 *
 * @author ersolano
 */
public class GestorPersona extends Gestor {

    public GestorPersona() {
        super();
    }
    
    public boolean agregar(Persona d){
        return super.agregar(d);
    }
    
    public boolean modificar(Persona d){
        return super.modificar(d);
    }
    public Persona consultar(String id){
        Persona laPersona = new Persona();
        laPersona.setId(id);
        return (Persona) super.consultar(laPersona);
    }
    
    public boolean eliminar(Persona d){
        return super.eliminar(d);
    }
    
    public String listar(){
        return super.listar(); 
    }
    
    public Persona getPersona(int posicion){
        if (posicion >= super.getCantidad())
            return null;
        else
            return (Persona) gestor.get(posicion);
    }
}
