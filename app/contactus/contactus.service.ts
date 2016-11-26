import { Injectable } from '@angular/core';

import { Contactus } from './contactus.model';

@Injectable()
export class ContactusService {

	constructor() { }

	getContacts(): Contactus[] {
		return [
			{ name: "Ryan", email: "ryans@email.com", phone: "123-456-7890" },
			{ name: "RyansBrother", email: "ryansbrothersemail@email.com", phone: "123-456-7891" }
		]
	}
}