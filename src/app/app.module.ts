import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CepListComponent } from './cep-list/cep-list.component';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: CepListComponent },
      { path: 'ceps/:numeroCep', component: CepComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CepListComponent,
    HomeComponent,
    CepComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
