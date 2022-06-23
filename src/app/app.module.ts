import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsComponent } from './commons/commons.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './pages/products-page/product-card/product-card.component';
import { ProductListComponent } from './pages/products-page/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonsComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    PagesComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductCardComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
