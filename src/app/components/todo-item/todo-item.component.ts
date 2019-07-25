import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../service/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  //set dynamic class
  setClasses() {
    let classes = {
      todo : true,
      'is-complete' : this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed
    //Toggle in Service
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    //console.log("deleted")
    this.deleteTodo.emit(todo);
  }
}
