import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SecondComponent} from "./second/second.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'second', component: SecondComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
