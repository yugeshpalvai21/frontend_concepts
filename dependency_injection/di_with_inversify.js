import { Container, injectable } from 'inversify';

const container = new Container();

@injectable()
class Logger {
  log(message) {
    console.log(`New Log Created - ${message}`);
  }
}

@injectable()
class Database {
  constructor(private logger: Logger) {}

  saveRecord(data) {
    this.logger.log(`record saved with ${data}`);
  }
}

@injectable()
class Controller {
  constructor(private database: Database, private logger: Logger) {}

  create() {
    this.database.saveRecord('user data');
    this.logger.log('action completed with 200');
  }
}

container.bind<Logger>('Logger').to(Logger);
container.bind<Database>('Database').to(Database);
container.bind<Controller>('Controller').to(Controller);

const logger = container.get<Logger>('Logger');
const database = container.get<Database>('Database');
const controller = container.get<Controller>('Controller');

controller.create();