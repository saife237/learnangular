import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { SairamComponent } from './sairam/sairam';
import { KesavaComponent } from './kesava/kesava.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SairamComponent,
    KesavaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
