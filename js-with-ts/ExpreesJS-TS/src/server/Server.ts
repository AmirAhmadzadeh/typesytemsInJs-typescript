import express, { Request, Response } from 'express';
import { router } from '../routes/loginRotes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-session';

export default class Server {
  private app: express.Express = express();
  constructor() {
    this.configiureApp = this.configiureApp.bind(this);
    this.setPort = this.setPort.bind(this);
    this.setRoutes = this.setRoutes.bind(this);
    this.runApp = this.runApp.bind(this);

    this.runApp();
  }

  configiureApp(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser({ keys: ['icajkncja'] }));
  }

  setRoutes(): void {
    this.app.use(router);
  }
  setPort(): void {
    this.app.listen(3000, err => {
      if (err) console.log('Error In Run Method Of a Server Class', err);
      console.log('Server is runnig on port http://localhost:3000');
    });
  }

  runApp(): void {
    this.configiureApp();
    this.setPort();
    this.setRoutes();
  }
}