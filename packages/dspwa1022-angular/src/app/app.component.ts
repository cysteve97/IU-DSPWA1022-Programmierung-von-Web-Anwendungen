import { Component } from '@angular/core';
import { Task } from './todos-signals/model/task';
import { TodoListComponent } from "./todos-signals/components/todo-list/todo-list.component";
import { LogListComponent } from "./logs/components/log-list/log-list.component";
import { LogService } from './logs/services/log.service';
import { CalculatorComponent } from "./calculator/components/calculator/calculator.component";
import { FormsDemoComponent } from "./forms/components/forms-demo/forms-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TodoListComponent, LogListComponent, CalculatorComponent, FormsDemoComponent]
})
export class AppComponent {

  constructor(logs: LogService) {
    logs.addEntry('App started!');
  }

  tasks: Task[] = [
    { title: 'Create Angular App', done: true },
    { title: 'Use Components', done: true },
    { title: 'Use Services', done: false },
    { title: 'Use Signals', done: false },
  ];
}
