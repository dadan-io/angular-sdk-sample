import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VideosModule} from 'angular-dadan-sdk';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
