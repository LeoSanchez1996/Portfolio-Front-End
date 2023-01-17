import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../modelo/skill';

@Injectable({
  providedIn: 'root'
})
export class ServicioSkillService {

  constructor(private http:HttpClient) {}
    Url='https://miprimeraapi.onrender.com/api/auth/users/skill';
  
  getSkill(){
    return this.http.get<Skill[]>(this.Url)
  }
  postActualizarSkill(datos:any, datosID:any){
    return this.http.put<any>('https://miprimeraapi.onrender.com/api/auth/users/skill/'+datosID, datos);
  }
  postCrearSkill(datos:any){
    return this.http.post<any>('https://miprimeraapi.onrender.com/api/auth/users/skill', datos);
  }
  postBorrarSkill(datosID:any){
    return this.http.delete<any>('https://miprimeraapi.onrender.com/api/auth/users/skill/'+datosID);
  }
}
