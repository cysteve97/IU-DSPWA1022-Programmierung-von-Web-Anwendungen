import { Component, model } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {

  task = model.required<Task>();

  complete() {
    this.task.set({ ...this.task(), done: true });
  }

}
