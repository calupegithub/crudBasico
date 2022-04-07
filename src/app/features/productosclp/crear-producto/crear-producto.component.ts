import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/core/models/producto.model';
import { ProductoService } from 'src/app/core/service/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  guardarProducto() {
    console.log(this.formulario);
    const producto: Producto = {
      id: 0,
      nombre: this.formulario.value.nombre,
      descripcion: this.formulario.value.descripcion,
      valor: this.formulario.value.valor,
      imagen: this.formulario.value.imagen,
    };

    this.productoService.adicionarProducto(producto);

    this.router.navigate(['/productosclp']);
  }

  regresar() {
    this.router.navigate(['/productosclp']);
  }
}
