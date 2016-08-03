import {Component, Input, ViewChild} from '@angular/core'
import {TodoService} from '../../services/todo/todo.service'

var Myo = require('myo')

@Component ({
	selector: 'todos',
	template: `
		{{title}}
		{{thisIsPassed}}
		<div class="list-area">
			<ul class="todo-list">
				<li *ngFor="#todo of todos; let i = index" class="todo-item {{todo.completed ? 'checked' : ''}}">
					<span>{{ todo.title }}</span>
					<input [attr.data-indexId]="i" type="checkbox" checked="{{todo.completed ? 'checked' : ''}}" (change)="onItemSelected($event)"/>
					<button class="close-button" type="button" (click)="onItemRemove(i)">x</button>
				</li>
			</ul>
			<form (submit)="onNewTodoSubmit($event)">
				<input #name type="text" (change)="onNewTodoInputChange($event)" placeholder="I need to..." class="new-item-input" />
			</form>
		</div>
	`,
	providers: [TodoService],
	styleUrls: ['todos.css']
})

export class TodosComponent {

	@Input() thisIsPassed: string;

	title ='Here are some todos'
	todos
	newTodoName

	@ViewChild('name') vc;

	onItemRemove(itemIndexId) {
		this.todoService.removeTodo(itemIndexId)
	}

	onItemSelected(event) {
		console.log('selected')
		let todoId = event.target.dataset.indexid

		const toggleComplete = this.todoService.toggleTodoComplete(todoId)

		if (toggleComplete === 'all_complete') {
			alert('all complete')
		}

	}

	onNewTodoSubmit(event) {
		event.preventDefault()

		event.target.reset();
		console.log('form submit')
		this.todoService.addTodo(this.newTodoName)
	}

	onNewTodoInputChange(event) {

		console.log('text added')

		this.newTodoName = event.target.value
	}

	ngAfterViewInit() {
		console.log('view init')
		this.vc.nativeElement.focus();

		var self = this

		var myMyo;

		Myo.onError = function () {  
		    console.log("Woah, couldn't connect to Myo Connect");
		}

		Myo.on('fist', function(){  
		   console.log('Fist!');

		   self.onItemSelected({target:{dataset:{indexid: 0}}}) 
		   
		});

		Myo.on('fingers_spread', function(){  
		   console.log('fingers_spread!');
		   self.onItemRemove(0) 
		   
		});

		Myo.on('wave_in', function(){  
		   console.log('Wave In!');
	
		});

		Myo.on('wave_out', function(){  
		   console.log('Wave Out!');
		
		});

		Myo.on('connected', function(){  
			console.log('connected')
		    myMyo = this;

		});


		Myo.connect()

	}

	constructor(private todoService: TodoService) {
		this.todos = todoService.getTodos()
	}
}