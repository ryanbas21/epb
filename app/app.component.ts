import { Component } from '@angular/core';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
	selector: 'my-app',
	template: `
	<router-outlet></router-outlet>
	`
})
export class AppComponent { }
