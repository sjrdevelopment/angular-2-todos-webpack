import {Component} from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
    template: `
 
    	<div class="main">
    		<h1 class="heading">Hello Angular Todos</h1>
    		<todos [thisIsPassed]="passedVar"></todos>
    	</div>
    `,
    directives: [TodosComponent],
    styleUrls: ['main-view.css']
})
export class MainView {
	 title: string = 'Hi from main view';
}