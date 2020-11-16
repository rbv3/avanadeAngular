import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { CardAnimalComponent } from './card-animal/card-animal.component';
import { ExpansionInfoComponent } from './expansion-info/expansion-info.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

import { SharedModule } from './shared/shared.module';
import { CatImagesComponent } from './cat-images/cat-images.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardAnimalComponent,
    ExpansionInfoComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    ResultDialogComponent,
    CatImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ResultDialogComponent ],
})
export class AppModule { }
