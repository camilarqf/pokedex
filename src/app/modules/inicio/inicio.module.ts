import { InicioService } from './service/inicio.service';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule
  ],
  providers: [InicioService]
})
export class InicioModule { }
