import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ServicioProyectosService {

  constructor(private http:HttpClient) {}
    Url='https://miprimeraapi.onrender.com/api/auth/users/proyectos';
  
  getProyectos(){
    return this.http.get<proyectos[]>(this.Url)
  }
  postActualizarProy(datos:any, datosID:any){
    return this.http.put<any>('https://miprimeraapi.onrender.com/api/auth/users/proyectos/'+datosID, datos);
  }
  postCrearProy(datos:any){
    return this.http.post<any>('https://miprimeraapi.onrender.com/api/auth/users/proyectos', datos);
  }
  postBorrarProy(datosID:any){
    return this.http.delete<any>('https://miprimeraapi.onrender.com/api/auth/users/proyectos/'+datosID);
  }
}
