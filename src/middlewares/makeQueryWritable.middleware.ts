import { Request, Response, NextFunction } from 'express';
/**
 * Middleware to make req.query writable
 * in Express 5, where by default it has only getter.
 */

export function makeQueryWritable(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  Object.defineProperty(req, 'query', {
    ...Object.getOwnPropertyDescriptor(req, 'query'),
    value: req.query,
    writable: true
  });

  next();
}
