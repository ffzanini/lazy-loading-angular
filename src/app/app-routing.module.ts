import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'pages/customers', 
    loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) 
  }, 
  { 
    path: 'pages/orders', 
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule) 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
