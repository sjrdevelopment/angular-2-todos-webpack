import {Component} from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
    selector: 'my-app',
    template: `
    	<div class="main">
    		<h1 class="heading">Hello Angular Todos</h1>
    		<todos [thisIsPassed]="passedVar"></todos>
    	</div>
    `,
    directives: [TodosComponent],
    styleUrls: ['app.css']
})
export class AppComponent {
	 passedVar: string = 'Hi from parent';
}