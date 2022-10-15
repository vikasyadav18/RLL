import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { EngineerHomeComponent } from './engineer-home/engineer-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    ManagerComponent,
    EngineerComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    EngineerHomeComponent,
    ManagerHomeComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
