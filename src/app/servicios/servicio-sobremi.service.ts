import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SobreMi } from '../modelo/sobremi';

@Injectable({
  providedIn: 'root'
})
export class ServicioSobremiService {

  constructor(private http:HttpClient) { }
  Url='https://miprimeraapi.onrender.com/api/auth/users/sobreMi';
  Url2='https://miprimeraapi.onrender.com/api/auth/users/sobreMi/1'
  
  getSobreMi(){
    return this.http.get<SobreMi[]>(this.Url)
  }
  postActualizar(datos:any){
    return this.http.put<any>(this.Url2, datos);
  }
}
