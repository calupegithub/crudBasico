import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  tiles: any = [
    { text: 'One', cols: 8, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 3, color: 'lightgreen' },
    { text: 'Three', cols: 3, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 5, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 5, rows: 1, color: '#DDBD00' },
    { text: 'Six', cols: 5, rows: 1, color: '#DD0D00' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
