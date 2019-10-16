import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-consulta',
	templateUrl: './consulta.component.html',
	styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

	inventario;
	productos;

	constructor(private db: AngularFirestore) { }

	ngOnInit() {

		this.inventario = this.db.collection('inventario');
		this.productos = this.inventario.valueChanges();

	}

}
