import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderizaComponent } from './renderiza/renderiza.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full',
  },
  {
    path: 'result',
    component: RenderizaComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
