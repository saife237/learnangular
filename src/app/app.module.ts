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
import { CustomComponent } from './custom/custom.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'user-registration', component:UserregformComponent},
  {path:'directives', component:DirectivesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SairamComponent,
    KesavaComponent,
    DirectivesComponent,
    ChildComponent,
    UserregformComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
