/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio.controlador;

/**
 *
 * @author ersolano
 */
public class SingletonSoyUnico {
    private static SingletonSoyUnico singleton ;
    private Controlador elControlador ;

    private SingletonSoyUnico() {
        elControlador = new Controlador();
    }
    
    public static SingletonSoyUnico getInstance() {
        if (singleton == null){
            singleton = new SingletonSoyUnico();
        }
        return singleton;
    }
    
    public Controlador getController(){
        return getInstance().elControlador;
    }
}
