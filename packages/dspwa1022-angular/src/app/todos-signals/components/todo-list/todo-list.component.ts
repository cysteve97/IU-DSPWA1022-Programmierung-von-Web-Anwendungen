import { Component, computed, model } from '@angular/core';
import { LogService } from '../../../logs/services/log.service';
import { Task } from '../../model/task';
import { AddTodoInputComponent } from "../add-todo-input/add-todo-input.component";
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, AddTodoInputComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  tasks = model.required<Task[]>();
  completedTaskCount = computed(() => this.tasks().filter(task => task.done).length);

  constructor(
    private readonly logs: LogService
  ) {}

  announceTaskCompletion(task: Task) {
    this.tasks.update(tasks => tasks.map(t => t === task ? { ...t, done: true } : t));
    this.logs.addEntry(`Task "${task.title}" completed!`);
  }

  resetAllTasks() {
    this.tasks.update(tasks => tasks.map(task => ({ ...task, done: false })));
    this.logs.addEntry('All tasks reset!');
  }

  addTask(task: Task) {
    this.tasks.update(tasks => [...tasks, task]);
    this.logs.addEntry(`Task "${task.title}" added!`);
  }

}
