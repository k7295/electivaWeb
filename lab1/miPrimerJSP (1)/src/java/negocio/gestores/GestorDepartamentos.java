/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.gestores;

import java.util.List;
import modelo.datos.Departamento;

/**
 *
 * @author ersolano
 */
public class GestorDepartamentos extends Gestor {

    public GestorDepartamentos() {
        super();
    }
    
    public boolean agregar(Departamento d){
        return super.agregar(d);
    }
    
    public boolean modificar(Departamento d){
        return super.modificar(d);
    }
    public Departamento consultar(String codigo){
        Departamento elDep = new Departamento();
        elDep.setCodigo(codigo);
        return (Departamento) super.consultar(elDep);
    }
    
    public boolean eliminar(Departamento d){
        return super.eliminar(d);
    }
    
    public String listar(){
        return super.listar(); 
    }
    

    public Departamento getDepartamento(int posicion){
        if (posicion >= super.getCantidad())
            return null;
        else
            return (Departamento) gestor.get(posicion);
    }
}
