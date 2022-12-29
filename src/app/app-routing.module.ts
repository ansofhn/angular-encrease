import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductsComponent } from './products/products.component';
import { ResgisterpageComponent } from './resgisterpage/resgisterpage.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'login',component:LoginpageComponent},
  {path:'register',component:ResgisterpageComponent},
  {path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
