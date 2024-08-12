import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { LogListEntryComponent } from "../log-list-entry/log-list-entry.component";

@Component({
  selector: 'app-log-list',
  standalone: true,
  imports: [LogListEntryComponent],
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.scss'
})
export class LogListComponent {

  constructor(
    readonly logs: LogService
  ) {}

}
