import {find} from 'lodash'

export class TodoService {
	todos = [
		{
			title: "Pick up dry cleaning",
			completed: true
		},
		{
			title: "Buy groceries",
			completed: false
		},
		{
			title: "Book train tickets",
			completed: false
		}
	];

	getTodos() {
		return Promise.resolve(this.todos)
	}

	addTodo(newTodoName: string) {
		console.log('add new todo')
		console.log(newTodoName)

		this.todos.push({
			title: newTodoName,
			completed: false
		})
	}

	removeTodo(todoId: number) {
		this.todos.splice(todoId, 1)
	}

	toggleTodoComplete(todoId: number) {
		this.todos[todoId].completed = !this.todos[todoId].completed

		if (!find(this.todos, {completed: false})) {
			return 'all_complete'
		}
	}
}