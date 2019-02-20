import { UtellyService } from './services/utelly.service';

import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Router, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoute: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : '**',
    component : NotfoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavBarComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UtellyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
