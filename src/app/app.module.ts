import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PechesComponent } from './peches/peches.component';
// import { PechesComponent } from './peches/';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  PechesService } from './peches.service';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';


const Routes = [

  {
    path: '',
    redirectTo: 'peches',
    pathMatch: 'full'
  },
  {
    path: 'peches', component: PechesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'table', component: TableComponent
  }


];


@NgModule({
  declarations: [
    AppComponent,
    PechesComponent,
    TableComponent,
    MainNavComponent,
    ContactComponent
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
    MatListModule
  ],
  providers: [PechesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
