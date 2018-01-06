/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo.datos;

import java.util.Objects;

/**
 *
 * @author ersolano
 */
public class Persona {
    private String id;
    private String nombre;
    private String direccion;    
    private Provincia provincia;
    private String numTelefono;    
    private TipoTelefono tipoTel;
    private Departamento depto;

    public Persona() {
    }

    public Persona(String id, String nombre, Provincia provincia, String numTelefono, TipoTelefono tipoTel, Departamento depto,String direccion) {
        this.id = id;
        this.nombre = nombre;
        this.provincia = provincia;
        this.numTelefono = numTelefono;
        this.tipoTel = tipoTel;
        this.depto = depto;
        this.direccion = direccion;
    }
    
    public Persona(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Provincia getProvincia() {
        return provincia;
    }

    public void setProvincia(Provincia provincia) {
        this.provincia = provincia;
    }

    public String getNumTelefono() {
        return numTelefono;
    }

    public void setNumTelefono(String numTelefono) {
        this.numTelefono = numTelefono;
    }

    public TipoTelefono getTipoTel() {
        return tipoTel;
    }

    public void setTipoTel(TipoTelefono tipoTel) {
        this.tipoTel = tipoTel;
    }

    public Departamento getDepto() {
        return depto;
    }

    public void setDepto(Departamento depto) {
        this.depto = depto;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Persona other = (Persona) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

   

    @Override
    public String toString() {
        return "Persona{" + "id=" + id + ", nombre=" + nombre + ", direccion=" + direccion + ", provincia=" + provincia + ", numTelefono=" + numTelefono + ", tipoTel=" + tipoTel + ", depto=" + depto + '}';
    }
    
    
}
