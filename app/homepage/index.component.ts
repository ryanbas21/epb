import { Component } from '@angular/core';
import { IndexTitleComponent } from './index-title.component';
import { IndexSubTitleComponent } from './index-sub-title.component';
@Component({
  selector: 'in',
  template: `
<nav class='navbar navbar-inverse'>
<div class="container-fluid">
   <a class='navbar-brand' routerLink="/index" routerLinkActive="active">Home</a>
   <a class='navbar-brand' routerLink="/articles" routerLinkActive="inactive">All Articles</a>
   <a class='navbar-brand' routerLink="/contact" routerLinkActive="inactive">Contact Us</a>
   <a class='navbar-brand' routerLink="/disclaimer" routerLinkActive="inactive">Disclaimer</a>
</div>
</nav>
  <div class='container'>
    <div style='col-md-4 jumbotron'></div>
    <div style='col-md-4'>
      <index></index>
      <sub></sub>
      <graph></graph>
    </div>
    <div style='col-md-4 jumbotron'>
</div>
  </div>

<div class='center-btn'>
  <btn></btn>
</div>

  `,
  styles: [`
    .center-btn {
      margin-left: auto;
      margin-right: auto;
      width: 100px }`
  ]
})
export class IndexComponent {}
