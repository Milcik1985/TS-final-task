export class Logger {
  private static instance: Logger;
  private logMessages: string[];

  private constructor() {
    this.logMessages = [];
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.logMessages.push(message);
    console.log(message);
  }
}
