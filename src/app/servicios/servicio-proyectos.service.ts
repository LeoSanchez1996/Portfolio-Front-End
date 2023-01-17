import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ServicioProyectosService {

  constructor(private http:HttpClient) {}
    Url='https://backend-contenido.onrender.com/users/proyectos';
  
  getProyectos(){
    return this.http.get<proyectos[]>(this.Url)
  }
  postActualizarProy(datos:any, datosID:any){
    return this.http.put<any>('https://backend-contenido.onrender.com/users/proyectos/'+datosID, datos);
  }
  postCrearProy(datos:any){
    return this.http.post<any>('https://backend-contenido.onrender.com/users/proyectos', datos);
  }
  postBorrarProy(datosID:any){
    return this.http.delete<any>('https://backend-contenido.onrender.com/users/proyectos/'+datosID);
  }
}
