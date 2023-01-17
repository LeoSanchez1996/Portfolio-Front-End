import { Component, OnInit,Renderer2, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit{

  form:FormGroup;

  errorMessage='';

  constructor(private formBuilder:FormBuilder, private autentificacionService:AutentificacionService, private ruta:Router, private renderer2: Renderer2) { 
    this.form=this.formBuilder.group(
      {
        username:['', [Validators.required, Validators.minLength(5)]],
        password:['',[Validators.required, Validators.minLength(8)]],
        // deviceInfo:this.formBuilder.group({
        //   deviceId:["17867868768"],
        //   deviceType: ["DEVICE_TYPE_ANDROID"],
        //   notificationToken:["67657575eececc34"]
        // })
      }
    )
  }

  ngOnInit(): void {
  }
  @ViewChild('divelement1', {read: ElementRef}) noVer!:ElementRef;

  get Email()
  {
    return this.form.get('username');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    
    event.preventDefault;
      this.autentificacionService.IniciarSesion(this.form.value).subscribe({next:data=>{
        console.log("DATA:", JSON.stringify(data));
        this.ruta.navigate(['/porfolio']);
      },
      error: err =>{ 
        console.log("hola:"+ err.status); 
        this.errorMessage = err.message
        if(err.status == 401 || err.status == 500){
        const nuncaVer=this.noVer.nativeElement;
        this.renderer2.addClass(nuncaVer, 'noVer');}}})
        
          const nuncaVer=this.noVer.nativeElement;
          this.renderer2.removeClass(nuncaVer, 'noVer');
  }
  tocar(){
    const nuncaVer=this.noVer.nativeElement;
    this.renderer2.addClass(nuncaVer, 'noVer');
  }
}
