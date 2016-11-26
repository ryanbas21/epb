import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes = [
	{ path: '', component: ContactusComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ContactusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
