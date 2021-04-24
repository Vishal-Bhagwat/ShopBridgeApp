import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ManageProductsComponent } from '../app/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: '', // Default Route
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ManageProductsComponent
  },
  {
    path: '**', // Wild Card Route - We can create & add NotFoundComponent
    component: ManageProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
