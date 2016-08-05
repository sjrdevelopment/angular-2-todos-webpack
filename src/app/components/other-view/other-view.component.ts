import {Component} from '@angular/core';

@Component({
    template: `
    	<div class="other-view">
    		<p>{{title}}</p>
    	</div>
    `,
})
export class OtherViewComponent {
	 title: string = 'Hi from other view';
}