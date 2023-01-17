import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ServicioEstudioService } from 'src/app/servicios/servicio-estudio.service';
import { FormGroup, FormControl} from '@angular/forms';
import {timer} from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;

  estudio:any;

  estudioN:any;

  crearEstudio:any;

  itemE:any;
  constructor(private datosPorfolio:PorfolioService, private serviceEst:ServicioEstudioService) { }

  ngOnInit(): void {
    
    this.serviceEst.getEstudio()
    .subscribe(data=>{
      this.estudio=data;
    });
    this.itemE = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      descripcion: new FormControl(),
      img: new FormControl()
  });
  }
  onEditEst(item:any){
    this.estudio.forEach((element:any)=>{
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onEnviarEst(item:any){
    this.serviceEst.postActualizarEst({"titulo" : item.titulo,
                                       "inicio": item.inicio,
                                       "fin": item.fin,
                                       "descripcion":item.descripcion,
                                       "img":item.img}, item.id).subscribe((data)=>{
      this.estudioN=data;
    });
    return item.isEdit=false;
  }
  onCrear(itemE:any){
    this.serviceEst.postCrearEst({"id": this.estudio.length + 1,
      "titulo" : itemE.titulo,
      "inicio": itemE.inicio,
      "fin": itemE.fin,
      "descripcion":itemE.descripcion,
      "img":itemE.img}).subscribe((data)=>{
      this.crearEstudio=data;
    });
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    }); 
  }
  onBorrar(itemId:any){
    this.serviceEst.postBorrarEst(itemId).subscribe();
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    });
  }
}
