import { Component } from '@angular/core';


@Component({
  selector: 'sub',
  template: `
      <div class='jumbotron'>
        <h3 class='bottom'>STAY AHEAD OF CONSENSUS WITH THE EPB ADVISING NEWSLETTER</h3>
        <h3 class='bottom'> FULL WEEKLY OVERVIEW OF THE US ECONOMY</h3>
      </div>
         `,
  styles: [`
           .bottom {
            margin-left: auto;
            margin-right: auto;
           }`
         ]
})

export class IndexSubTitleComponent {}
