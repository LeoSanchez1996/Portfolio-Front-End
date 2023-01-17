import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ServicioProyectosService } from 'src/app/servicios/servicio-proyectos.service';
import { FormGroup, FormControl} from '@angular/forms';
import {timer} from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectoList:any;

  proyectos:any;

  proyectosN:any;

  itemP:any;

  crearProy:any;

  constructor(private datosPorfolio:PorfolioService, private serviceProy:ServicioProyectosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.proyectoList=data.proyectos;
    });
    this.serviceProy.getProyectos()
    .subscribe(data=>{
      this.proyectos=data;
    });
    this.itemP = new FormGroup({
      proyecto: new FormControl(),
      descripcion: new FormControl()
  });
  }
  onEditProy(item:any){
    this.proyectos.forEach((element:any)=>{
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onEnviarProy(item:any){
    this.serviceProy.postActualizarProy({"proyecto" : item.proyecto,
                                       "descripcion": item.descripcion}, item.id).subscribe((data)=>{
      this.proyectosN=data;
    });
    return item.isEdit=false;
  }
  onCrear(itemP:any){
    this.serviceProy.postCrearProy({"id": this.proyectos.length + 1,
      "proyecto" : itemP.proyecto,
      "descripcion": itemP.descripcion}).subscribe((data)=>{
      this.crearProy=data;
    });
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    });
  }
  onBorrar(itemId:any){
    this.serviceProy.postBorrarProy(itemId).subscribe();
    const contador = timer(1000);
    contador.subscribe((n)=>{
      window.location.reload(); 
    });
  }
}
