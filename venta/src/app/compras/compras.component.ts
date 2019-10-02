import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-compras',
	templateUrl: './compras.component.html',
	styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

constructor() { }

	buscarProducto() {
		var elemento = (<HTMLInputElement>document.getElementById("input--busqueda"));
		console.log(elemento.value);

		// Rutina para búsqueda de producto en Firebase.

	}

	ngOnInit() {
	}

}
