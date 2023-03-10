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
import { FilterComponent } from './components/filter/filter.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SwiperModule } from 'swiper/angular';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ResgisterpageComponent } from './resgisterpage/resgisterpage.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { AboutComponent } from './components/about/about.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    SearchBarComponent,
    SortBarComponent,
    ProductCardsComponent,
    FilterComponent,
    HomepageComponent,
    ServiceComponent,
    ProductListComponent,
    LoginpageComponent,
    ResgisterpageComponent,
    ScrollToTopComponent,
    AboutComponent,
    AboutpageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
