import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	productos;
	productosList;

	constructor(private db: AngularFirestore) { }

	ngOnInit() {
		this.productos = this.db.collection('inventario');
	}

	registrar() {

		var id = (<HTMLInputElement>document.getElementById('id_producto')).value;
		var nombre = (<HTMLInputElement>document.getElementById('nombre_producto')).value;
		var precio = (<HTMLInputElement>document.getElementById('precio_producto')).value;
		var costo = (<HTMLInputElement>document.getElementById('costo_producto')).value;
		var cantidad = (<HTMLInputElement>document.getElementById('cantidad')).value;
		var categoria = (<HTMLInputElement>document.getElementById('categoria')).value;
		var proveedor = (<HTMLInputElement>document.getElementById('proveedor')).value;

		if( this.productos.doc(id).set({
			id_producto: id, nombre_producto: nombre, precio_venta: precio,
			precio_compra: costo, categoria: categoria,
			cantidad: cantidad, proveedor: proveedor
		})) {
			alert("Se ha registrado el proveedor correctamente");
		}
	}


}
