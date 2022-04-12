import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { SairamComponent } from './sairam/sairam';
import { KesavaComponent } from './kesava/kesava.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { UserregformComponent } from './userregform/userregform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SairamComponent,
    KesavaComponent,
    DirectivesComponent,
    ChildComponent,
    UserregformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
