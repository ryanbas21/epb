import { Component } from '@angular/core';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>My First Angular App</h1>
	<router-outlet></router-outlet>
	`
})
export class AppComponent { }
