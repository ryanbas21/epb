import { Component, OnInit } from '@angular/core';

import { Contactus } from './contactus.model';
import { ContactusService } from './contactus.service';

@Component({
	selector: 'contactus',
	providers: [ ContactusService ],
	template: `
	<nav class='navbar navbar-inverse'>
	<div class="container-fluid">
	   <a class='navbar-brand' routerLink="/index" routerLinkActive="inactive">Home</a>
	   <a class='navbar-brand' routerLink="/articles" routerLinkActive="inactive">All Articles</a>
	   <a class='navbar-brand' routerLink="/contactus" routerLinkActive="active">Contact Us</a>
	   <a class='navbar-brand' routerLink="/disclaimer" routerLinkActive="inactive">Disclaimer</a>
	</div>
	</nav>
	<h2>Contact Us</h2>
	<div *ngFor="let person of contactPeople">
	<p>
	Name: {{person.name}}<br>
	Email: <a href="mailto:{{person.email}}">{{person.email}}</a><br>
	Phone: {{person.phone}}<br>
	</p>
	</div>
	`,
	styles: [
		`
		p {
			color: #660000;
			font-family: 'Arial';
		}
		`
	]
})

export class ContactusComponent implements OnInit {
	contactPeople: Contactus[] = [];

	constructor(private contactusService: ContactusService) { }

	ngOnInit(): void { this.contactPeople = this.contactusService.getContacts() }
}
