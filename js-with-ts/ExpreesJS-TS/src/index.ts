import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginContoroller';
import './controllers/HomeController';

const app: express.Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser({ keys: ['Helloooooo'] }));
app.use(AppRouter.getInstance());

app.listen(3000, (err) => {
  if (err) console.log('Error In Index.ts', err);
  console.log('Server is runnig on port http://localhost:3000');
});
