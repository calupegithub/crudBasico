import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from '../productosclp/crear-producto/crear-producto.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [{ path: '', component: ProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosjpRoutingModule {}
