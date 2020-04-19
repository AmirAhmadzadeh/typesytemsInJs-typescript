import { Response, Request } from 'express';
import { controller, get, post } from './decorators';
import { bodyValidator } from './decorators/body_validator';

@controller('/auth')
export default class LoginController {
  @get('/login')
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
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  logIn(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'pass') {
      req.session = { loggedIn: true };
      return res.redirect('/');
    }
    res.send('Invalid Email And Password');
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
