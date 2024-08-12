import { DatePipe } from '@angular/common';
import { Component, model } from '@angular/core';
import { LogEntry } from '../../model/log-entry';

@Component({
  selector: 'app-log-list-entry',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './log-list-entry.component.html',
  styleUrl: './log-list-entry.component.scss'
})
export class LogListEntryComponent {

  entry = model.required<LogEntry>();

}
