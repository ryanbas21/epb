import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { IndexTitleComponent } from './homepage/index-title.component';
import { IndexComponent } from './homepage/index.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexSubTitleComponent } from './homepage/index-sub-title.component';
import { IndexTrialButton } from './homepage/index-trial-btn.component'
import { Graph } from './homepage/graph.component'
import { ContactusComponent } from './contactus/contactus.component';
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'contactus', component: ContactusComponent }
];
@NgModule({
  imports: [
   BrowserModule,
   RouterModule.forRoot(appRoutes)
 ],
  declarations: [ AppComponent, IndexTitleComponent, IndexComponent, IndexSubTitleComponent, IndexTrialButton, Graph, ContactusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
