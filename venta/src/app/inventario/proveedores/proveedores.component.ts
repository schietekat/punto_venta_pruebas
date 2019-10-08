import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-proveedores',
	templateUrl: './proveedores.component.html',
styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}


	registrar() {
		
		var id = (<HTMLInputElement>document.getElementById('id_proveedor')).value;
		var nombre = (<HTMLInputElement>document.getElementById('nombre_proveedor')).value;
		var correo = (<HTMLInputElement>document.getElementById('email_proveedor')).value;
		var telefono = (<HTMLInputElement>document.getElementById('telefono_proveedor')).value;

		console.log(id);

	}	

}
