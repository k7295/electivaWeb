/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.gestores;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author ersolano
 */
public class Gestor {
    protected List gestor;

    public Gestor() {
        gestor = new ArrayList();
    }

    public void setGestor(List gestor) {
        this.gestor = gestor;
    }

    public List getGestor() {
        return gestor;
    }
    
    public boolean agregar (Object obj){
        if (gestor.indexOf(obj) != -1)
            return false;
        return gestor.add(obj);
    }
    
    public boolean modificar(Object obj){
        if (gestor.indexOf(obj) != -1){
            gestor.set(gestor.indexOf(obj), obj);
            return true;
        }
        return false;
    }
    
    public Object consultar(Object obj){
        if (gestor.indexOf(obj) != -1)
            return gestor.get(gestor.indexOf(obj));
        return null;
    }
    
    public boolean eliminar(Object obj){
        if (consultar(obj) != null){
            gestor.remove(obj);
            return true;
        }
        return false;
    }

  public String listar(){
      return gestor.toString();
  }
  
  public int getCantidad(){
      return gestor.size();
  }
    
}
