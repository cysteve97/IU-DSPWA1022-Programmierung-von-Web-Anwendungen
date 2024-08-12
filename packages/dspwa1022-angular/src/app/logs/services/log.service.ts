import { Injectable, signal } from '@angular/core';
import { LogEntry } from '../model/log-entry';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  entries = signal<LogEntry[]>([]);

  addEntry(message: string) {
    this.entries.update(entries => [...entries, new LogEntry(message)]);
  }
}
