import { Request, Response, NextFunction } from 'express';
import { HttpException } from '@laundry/shared-utils';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: 'Internal server error',
  });
};
