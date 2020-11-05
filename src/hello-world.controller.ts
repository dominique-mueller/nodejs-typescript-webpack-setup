import { Request, Response, NextFunction } from 'express';

export class HelloWorldController {
  public async getUser(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.set('Content-Type', 'application/json');
    response.send({
      message: 'Hello World!',
    });
    next();
  }
}
