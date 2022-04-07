import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  listProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Acelifen',
      descripcion: 'Caja x 100 mg',
      valor: '100',
      imagen:
        'https://www.larebajavirtual.com/images/productos/sii/F/300x300/acelifen_gotas-41601-1642087553.png',
    },
    {
      id: 2,
      nombre: 'Dolex',
      descripcion: 'Caja x 500 mg',
      valor: '2300',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/dolex_rapida_accion-30282-1615171578.png',
    },

    {
      id: 3,
      nombre: 'Sal de frutas LUA',
      descripcion: 'Caja x 8 Und',
      valor: '14900',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/sal_de_frutas_lua_original-43654-1624477435.png',
    },
    {
      id: 4,
      nombre: 'Alka-Seltzer',
      descripcion: 'Caja x 14 Tab',
      valor: '2300',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/oferta_alka_seltzer_precio_especial-123832-1588036321.png',
    },
    {
      id: 5,
      nombre: 'PILA VARTA ALKALINA 9V',
      descripcion: 'Caja x 1 Und',
      valor: '23000',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/pila_varta_alkalina_9v_ref_4922-18779-1627844032.png',
    },
    {
      id: 6,
      nombre: 'DURACELL PILAS ALCALINAS AA',
      descripcion: 'Caja x 2 Und',
      valor: '3200',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/duracell_pilas_alcalinas_aa_de_larga_duracion-121175-1640703426.png',
    },
    {
      id: 7,
      nombre: 'BIOCALCIUM PLUS CALCIO',
      descripcion: 'Caja x 30 Sobres',
      valor: '46100',
      imagen:
        'https://larebajavirtual.com/images/productos/sii/F/300x300/biocalcium_plus_calcio-104564-1608153513.png',
    },
  ];
  constructor() {}

  getProductos() {
    //return this.listProductos.slice();
    return [...this.listProductos];
  }

  eliminarProducto(idProducto: number) {
    const index = this.listProductos.findIndex((producto) => {
      return producto.id === idProducto;
    });
    this.listProductos.splice(index, 1);
  }



    crearProducto(producto: Producto) {
      this.listProductos.unshift(producto);
    }

  }





