import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from '../modelo/estudio';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudioService {

  constructor(private http:HttpClient) {}
    Url='https://backend-contenido.onrender.com/users/estudio';
  
  getEstudio(){
    return this.http.get<Estudio[]>(this.Url)
  }
  postActualizarEst(datos:any, datosID:any){
    return this.http.put<any>('https://backend-contenido.onrender.com/users/estudio/'+datosID, datos);
  }
  postCrearEst(datos:any){
    return this.http.post<any>('https://backend-contenido.onrender.com/users/estudio', datos);
  }
  postBorrarEst(datosID:any){
    return this.http.delete<any>('https://backend-contenido.onrender.com/users/estudio/'+datosID);
  }
}
