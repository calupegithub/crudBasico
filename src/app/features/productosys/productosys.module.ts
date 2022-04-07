import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosysRoutingModule } from './productosys-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';



@NgModule({
  declarations: [
    ProductosComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosysRoutingModule,
    MaterialModule
  ]
})
export class ProductosysModule { }
