import { Request, Response } from 'express';

export default class HomeController {
  constructor() {
    this.getTheHome = this.getTheHome.bind(this);
  }

  getTheHome(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(this.getContent(true));
    } else {
      res.send(this.getContent(false));
    }
  }

  getProtected(req: Request, res: Response): void {
    res.send(' This route is protected and you access this');
  }

  getContent(status: boolean): string {
    if (status) {
      return `
      <div>
          <h1> Helooooo </h1>
          <p> You are Logged In Right Now  </p>
          <a href='http://localhost:3000/logout'> Logout </a>  
      <div>
     `;
    }

    return `
          <div>
                 <h1> Helooooo </h1>
                 <p> You are NOT Logged  In Right Now  </p>
                 <a href='http://localhost:3000/login'> LogIn </a>  
          <div>
      `;
  }
}
