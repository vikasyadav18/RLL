import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerComponent } from './customer/customer.component';
import { EngineerHomeComponent } from './engineer-home/engineer-home.component';

import { EngineerComponent } from './engineer/engineer.component';

import { HomeComponent } from './home/home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'engineer',
    component:EngineerComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  
  {
    path:'customer-home',
    component:CustomerHomeComponent
  },
  {
    path:'engineer-home',
    component:EngineerHomeComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent
  },
  {
    path:'manager-home',
    component:ManagerHomeComponent
  },
  {
    path:'footer-signUp',
    component:CustomerComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

