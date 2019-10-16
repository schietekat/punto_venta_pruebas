import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ComprasComponent } from './compras/compras.component';
import { RegistroComponent } from './inventario/registro/registro.component';
import { ConsultaComponent } from './inventario/consulta/consulta.component';
import { ProveedoresComponent } from './inventario/proveedores/proveedores.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  	declarations: [
		AppComponent,
		HomePageComponent,
		FooterComponent,
		InventarioComponent,
		ReportesComponent,
		ComprasComponent,
		RegistroComponent,
		ConsultaComponent,
		ProveedoresComponent,
		NavbarComponent,
  	],
  	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		FormsModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
