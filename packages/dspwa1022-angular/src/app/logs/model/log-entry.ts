export class LogEntry {

  readonly timestamp = Date.now();

  constructor(
    readonly message: string,
  ) {}

}
