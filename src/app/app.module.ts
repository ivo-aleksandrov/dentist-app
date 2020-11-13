import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoSectionComponent } from './components/logo-section/logo-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { Routes, RouterModule } from '@angular/router';
import { PricesSectionComponent } from './components/prices-section/prices-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from './services/product.service';

const routes: Routes = [
  {path: 'prices', component: PricesSectionComponent},
  {path: 'services', component: MainPageContentComponent},
  {path: 'products', component: ProductsSectionComponent},
  {path: 'contacts', component: ContactSectionComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LogoSectionComponent,
    HeaderSectionComponent,
    MainPageContentComponent,
    FooterSectionComponent,
    PricesSectionComponent,
    ContactSectionComponent,
    ProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
