import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    	<div class="stuff">
    		<h1 class="heading">Learning Angular 2</h1>
    		<router-outlet></router-outlet>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app.css']
})
export class AppComponent {
	 passedVar: string = 'Hi from parent';
}