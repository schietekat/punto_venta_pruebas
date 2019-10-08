import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-proveedores',
	templateUrl: './proveedores.component.html',
styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

	proveedoresList;

	constructor(db: AngularFirestore) {
		this.proveedoresList = db.collection('proveedor');
	}

	ngOnInit() {
	}


	registrar() {
		
		var id = (<HTMLInputElement>document.getElementById('id_proveedor')).value;
		var nombre = (<HTMLInputElement>document.getElementById('nombre_proveedor')).value;
		var correo = (<HTMLInputElement>document.getElementById('email_proveedor')).value;
		var telefono = (<HTMLInputElement>document.getElementById('telefono_proveedor')).value;

		if( this.proveedoresList.doc(id).set({
			nombre: nombre, email: correo, telefono: telefono
		})) {
			alert("Se ha registrado el proveedor correctamente");
		}

	}	

}
