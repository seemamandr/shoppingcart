import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcartComponent } from './addcart/addcart.component';
import { GotocartComponent } from './gotocart/gotocart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcartComponent,
    GotocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
