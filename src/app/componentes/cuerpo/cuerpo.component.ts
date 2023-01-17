import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ServicioPorfService } from 'src/app/servicios/servicio-porf.service';
import { ServicioSobremiService } from 'src/app/servicios/servicio-sobremi.service';
import { FormGroup, FormControl} from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  miPorfolio:any;

  personas:any;

  sobreMi:any;

  sobreMy:any;

  personasN:any;

  fondo:any;

  perfil:any;

  itemF:any;

  EditarFondo:any;

  EditarPerfil:any;

  constructor(private servicePor:ServicioPorfService, private datosPorfolio:PorfolioService, private serviceSobre:ServicioSobremiService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data;
    });

    this.servicePor.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    });
    this.servicePor.getFondo()
    .subscribe(data=>{
      this.fondo=data;
    });
    this.servicePor.getPerfil()
    .subscribe(data=>{
      this.perfil=data;
    });
    this.serviceSobre.getSobreMi()
    .subscribe(dataS=>{
      this.sobreMi=dataS;
    }); 
    this.itemF = new FormGroup({
      link: new FormControl()
  });
    
  }
  onEdit(item:any){
    this.sobreMi.forEach((element:any)=>{
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onEnviar(item:any){
    this.serviceSobre.postActualizar({"contenido" : item.contenido}).subscribe((data)=>{
      this.sobreMy=data;
    });
    return item.isEdit=false;
  }
  
  onEditPer(item:any){
    this.personas.forEach((element:any)=>{
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onEnviarPer(item:any){
    this.servicePor.postActualizarPers({"nombre" : item.nombre,
                                          "apellido": item.apellido,
                                          "puesto": item.puesto,
                                          "nacionalidad":item.nacionalidad}, item.id).subscribe((data)=>{
      this.personasN=data;
    });
    return item.isEdit=false;
  }
  onEditFondo(itemF:any){
    this.servicePor.postActualizarFondo({"link" : itemF.link}).subscribe((data)=>{
      this.EditarFondo=data;
    });
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    });
  }
  onEditPerfil(itemF:any){
    this.servicePor.postActualizarPerfil({"link" : itemF.link}).subscribe((data)=>{
      this.EditarPerfil=data;
    });
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    });
  }
}
