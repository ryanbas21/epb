import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { IndexTitleComponent } from './homepage/index-title.component';
import { IndexComponent } from './homepage/index.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
];
@NgModule({
  imports: [
   BrowserModule,
   RouterModule.forRoot(appRoutes)
 ],
  declarations: [ AppComponent, IndexTitleComponent, IndexComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
