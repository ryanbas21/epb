import { Component } from '@angular/core';

@Component({
  selector: 'btn',
  template: `<button (click)='subscribed()' type='submit' class='btn btn-warning btn-group-lg'>Try 30 Days Free</button>
  <h4>{{text}}</h4>`,
  styles: [`
    .center: {

    }`]
})

export class IndexTrialButton {
  public text: string = '';
  subscribed() {
     this.text = 'You are subscribed';
  }
}
