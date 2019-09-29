import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotsalesComponent } from './hotsales/hotsales.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'hotsales', component: HotsalesComponent},{path: 'list', component: ListComponent },
  {path: 'login', component: LoginComponent},{path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
