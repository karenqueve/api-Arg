import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { MiargentinaComponent } from './pages/miargentina/miargentina.component';

const routes: Routes = [
  {
    path: "miargentina", component: MiargentinaComponent
  },
  {
    path: "gestion", component: GestionComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
