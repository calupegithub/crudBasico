import { validateVerticalPosition } from '@angular/cdk/overlay';
import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/core/models/producto.model';
import { ProductoService } from 'src/app/core/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  listProductos: Producto[] =[];
    displayedColumns: string[] = ['nombre', 'descripcion', 'valor', 'acciones'];
  //dataSource = ELEMENT_DATA;
  dataSource!: MatTableDataSource<Producto>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private _snackBar: any;
  constructor(private productoService: ProductoService, private sb: MatSnackBar ) {}

  ngOnInit(): void {
    this.cargarProductos()

  }


  cargarProductos(){
    this.listProductos = this.productoService.getProductos()
    this.dataSource = new MatTableDataSource(this.listProductos)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarProducto(idProducto: number ){
    console.log('idProducto', idProducto);
    this.productoService.eliminarProducto(idProducto);
    const index = this.listProductos.findIndex((producto) => {
      return producto.id === idProducto;
    });
    this.sb.open(

      'Se Elimino El PProducto: ' + this.listProductos[index].nombre,
            '' ,{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.cargarProductos()

    this.sb.open("El producto fue agrgado con exito",'',{
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })

}
}
