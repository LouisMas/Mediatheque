import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { GetProductsPageComponent } from './get-products-page/get-products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path:'home',component: HomePageComponent},
  {path:'products',component: ProductsPageComponent},
  {path:'product/:type/:id',component: GetProductsPageComponent},
  {path:'',redirectTo: 'home', pathMatch: "full"},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
