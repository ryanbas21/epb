import { Component } from '@angular/core';
import { IndexTitleComponent } from './index-title.component';

@Component({
  selector: 'in',
  template: `
<nav>
</nav>
  <div class='container'>
    <div style='col-md-4 jumbotron'></div>
    <index style='col-md-4'></index>
    <div style='col-md-4 jumbotron'></div>

  </div>`
})
export class IndexComponent {}
