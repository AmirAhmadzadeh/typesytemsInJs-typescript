import { Request, Response, NextFunction } from 'express';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';
import { use } from './decorators/use';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403);
  res.send('Not Premitted');
}

@controller('')
class HomeController {
  @get('/')
  getTheHome(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
          <h1> Helooooo </h1>
          <p> You are Logged In Right Now  </p>
          <a href='http://localhost:3000/auth/logout'> Logout </a>  
      <div>
     `);
    } else {
      res.send(`
        <div>
               <h1> Helooooo </h1>
               <p> You are NOT Logged  In Right Now  </p>
               <a href='http://localhost:3000/auth/login'> LogIn </a>  
        <div>);
        `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send(' This route is protected and you access this');
  }
}
