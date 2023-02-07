class Logger {
  log(message) {
    console.log(`New Log Created - ${message}`);
  }
}

class Database {
  constructor(logger) {
    this.logger = logger;
  }

  saveRecord(data) {
    this.logger.log(`record saved with ${data}`);
  }
}

class Controller {
  constructor(database, logger) {
    this.database = database;
    this.logger = logger;
  }

  create() {
    this.database.saveRecord('user data');
    this.logger.log('action completed with 200');
  }
}

const logger = new Logger();
const db = new Database(logger);
// db.saveRecord('user data');
// logger.log("record created on Database");

const controller = new Controller(db, logger);
controller.create();