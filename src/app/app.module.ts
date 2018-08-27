import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PechesComponent } from './peches/peches.component';
// import { PechesComponent } from './peches/';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  PechesService } from './peches.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { DishTableComponent } from './dish-table/dish-table.component';
import { HomeComponent } from './home/home.component';


const Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'peches', component: PechesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'home', component: HomeComponent
  }
 


];


@NgModule({
  declarations: [
    AppComponent,
    PechesComponent,
    
    MainNavComponent,
    ContactComponent,
    DishTableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PechesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
