import { Response, Request } from 'express';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

export default class LoginController {
  constructor() {}

  getLoginPage(req: Request, res: Response) {
    res.send(`
      <form method='POST'> 
       <div>
         <label>Email:</label>
         <input name='email' type='text'/>  
       </div>
       <div>
          <label> Password : </label>
          <input  name='password' type='password' />  
       </div>
       <div>
          <button>Submit</button>
       </div>
      </form
    `);
  }

  logIn(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'pass') {
      req.session = { loggedIn: true };
      return res.redirect('/');
    }
    res.send('Invalid Email And Password');
  }

  logout(req: Request, res: Response) {
    req.session = undefined;

    res.redirect('/');
  }
}
