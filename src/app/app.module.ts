import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioPorfService } from './servicios/servicio-porf.service';
import { ServicioSobremiService } from './servicios/servicio-sobremi.service';
import { ServicioEstudioService } from './servicios/servicio-estudio.service';
import { ServicioSkillService } from './servicios/servicio-skill.service';
import { ServicioProyectosService } from './servicios/servicio-proyectos.service';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PorfolioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServicioPorfService,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}, ServicioSobremiService, ServicioEstudioService, ServicioSkillService, ServicioProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

