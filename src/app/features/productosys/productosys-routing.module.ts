import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosysRoutingModule { }
