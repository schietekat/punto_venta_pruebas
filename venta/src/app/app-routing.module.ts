import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'inventario', component: InventarioComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'compras', component: ComprasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
