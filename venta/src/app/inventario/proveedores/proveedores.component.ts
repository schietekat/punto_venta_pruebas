import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/core/src/render3';

@Component({
	selector: 'app-proveedores',
	templateUrl: './proveedores.component.html',
styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

	proveedoresList;
	proveedores;

	constructor(private db: AngularFirestore) {
		
	}

	ngOnInit() {
		this.proveedores = this.db.collection('proveedor');
		this.proveedoresList = this.proveedores.valueChanges();
	}


	registrar() {
		
		var id = (<HTMLInputElement>document.getElementById('id_proveedor')).value;
		var nombre = (<HTMLInputElement>document.getElementById('nombre_proveedor')).value;
		var correo = (<HTMLInputElement>document.getElementById('email_proveedor')).value;
		var telefono = (<HTMLInputElement>document.getElementById('telefono_proveedor')).value;

		if( this.proveedores.doc(id).set({
			id: id, nombre: nombre, email: correo, telefono: telefono
		})) {
			alert("Se ha registrado el proveedor correctamente");
		}

	}	

}
