import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'liste', component:ListeComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'liste',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
