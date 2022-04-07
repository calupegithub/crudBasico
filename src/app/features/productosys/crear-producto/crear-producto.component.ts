import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Producto } from 'src/app/core/models/producto.model';
import { ProductoService } from 'src/app/core/service/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  foods: any[] = [ '$5000', '$20000','$60500','$87900' ];
  form: FormGroup;
  private _productosService: any;

  constructor(private fb: FormBuilder,
    private _productoService: ProductoService,
    private _router: Router,
    private sb: MatSnackBar,
    ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      imagen: ['', Validators.required],
    })
   }

  ngOnInit(): void {


  }
  crearProducto() {
    console.log(this.form);
     const user: Producto = {
       id: this.form.value.id,
       nombre: this.form.value.nombre,
       descripcion: this.form.value.descripcion,
       valor: this.form.value.valor,
       imagen: this.form.value.imagen,

     }

     this._productoService.crearProducto(user);
     this._router.navigate(['/productosys/']);
     this.sb.open("El producto fue agrgado con exito",'',{
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })



  }

}





