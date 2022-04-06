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
  [x: string]: any;
form: FormGroup;
  constructor(private fb: FormBuilder,
    private _productoService: ProductoService,
    private router:Router,
    private _snackBar: MatSnackBar) {
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

  agregarProducto(){
     const prod: Producto = {
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      valor: this.form.value.valor,
      imagen: this.form.value.imagen
    }

    this._productoService.agregarProducto(prod);
    this.router.navigate(['/productoswr']);
    this._snackBar.open(
      `Se agrego el producto`,
      '', {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
