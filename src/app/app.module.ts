import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    SearchBarComponent,
    SortBarComponent,
    ProductCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
