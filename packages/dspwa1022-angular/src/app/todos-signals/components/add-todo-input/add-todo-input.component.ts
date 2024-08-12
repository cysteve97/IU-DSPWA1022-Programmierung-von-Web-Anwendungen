import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-add-todo-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo-input.component.html',
  styleUrl: './add-todo-input.component.scss'
})
export class AddTodoInputComponent {

  titleControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  @Output()
  taskCreated = new EventEmitter<Task>();

  addTask() {
    const title = this.titleControl.value;

    if (this.titleControl.invalid || !title) {
      return;
    }

    this.taskCreated.emit({
      title,
      done: false
    });

    this.titleControl.reset();
  }

}
