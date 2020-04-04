import { NextFunction, Request, Response } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403);
  res.send('Not Premitted');
}
