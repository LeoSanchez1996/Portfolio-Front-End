import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ServicioSkillService } from 'src/app/servicios/servicio-skill.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillList:any;

  skill:any;

  skillN:any;

  itemS:any;
  
  crearSkill:any;
  
  constructor(private datosPorfolio:PorfolioService, private serviceSkill:ServicioSkillService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skillList=data.skill;
    });
    this.serviceSkill.getSkill()
    .subscribe(data=>{
      this.skill=data;
    });
    this.itemS = new FormGroup({
      actitud: new FormControl(),
      porcentaje: new FormControl()
  });
  }
  onEditSkill(item:any){
    this.skill.forEach((element:any)=>{
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onEnviarSkill(item:any){
    this.serviceSkill.postActualizarSkill({"actitud" : item.actitud,
                                       "porcentaje": item.porcentaje}, item.id).subscribe((data)=>{
      this.skillN=data;
    });
    return item.isEdit=false;
  }
  onCrear(itemS:any){
    this.serviceSkill.postCrearSkill({"id": this.skill.length + 1,
      "actitud" : itemS.actitud,
      "porcentaje": itemS.porcentaje+"%"}).subscribe((data)=>{
      this.crearSkill=data;
    });
    window.location.reload(); 
  }
  onBorrar(itemId:any){
    this.serviceSkill.postBorrarSkill(itemId).subscribe();
    window.location.reload(); 
  }
}
