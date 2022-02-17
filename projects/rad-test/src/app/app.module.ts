import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadModule } from 'rad';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadModule
  ],
  exports: [RadModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
