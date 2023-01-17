import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private url="https://miprimeraapi.onrender.com/api/auth/signin";
  // private url="http://localhost:8080/api/auth/signin";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autentificación está corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }
  IniciarSesion(credenciales:any):Observable<any>
  {
    return this.http.post<any>(this.url, credenciales).pipe(
      map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    })).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(err:HttpErrorResponse){
    if(err.status == 200 ){
      console.log('hola');
    }
    return throwError(()=>err);
  }

  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }
}
