import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { GotocartComponent } from './gotocart/gotocart.component';

const routes: Routes = [
  {
    path: '', component: AddcartComponent
  },
  {
    path: 'cart', component: AddcartComponent
  },
  {
    path: 'goto', component: GotocartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
