import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioPorfService {

  
  constructor(private http:HttpClient) { }
  Url='https://backend-contenido.onrender.com/users/';
  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url)
  }
  postActualizarPers(datos:any, datosID:any){
    return this.http.put<any>('https://backend-contenido.onrender.com/users/'+datosID, datos);
  }
  getFondo(){
    return this.http.get<any>('https://backend-contenido.onrender.com/users/fondo')
  }
  postActualizarFondo(datos:any){
    return this.http.put<any>('https://backend-contenido.onrender.com/users/fondo/1', datos);
  }
  getPerfil(){
    return this.http.get<any>('https://backend-contenido.onrender.com/users/perfil')
  }
  postActualizarPerfil(datos:any){
    return this.http.put<any>('https://backend-contenido.onrender.com/users/perfil/1', datos);
  }
}
