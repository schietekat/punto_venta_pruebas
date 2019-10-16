import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-compras',
	templateUrl: './compras.component.html',
	styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
	
	inventarioRef;
	productos;
	
	constructor(private db: AngularFirestore) {
		this.inventarioRef = db.collection("inventario");
	}
	

	valorBuscar: String;

	ngOnInit() {
		
	}

	buscarProducto() {
		console.log(this.valorBuscar);

		// Rutina para búsqueda de producto en Firebase.
		var query = this.inventarioRef.where("nombre_producto", "==", "CA");

	}

}
