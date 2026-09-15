import {Request, Response, NextFunction} from 'express';
import {z} from 'zod';

export function validateQuery(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid query parameters',
        details: result.error.flatten(),
      });

      return;
    }

    req.query = result.data as typeof req.query;

    next();
  };
}

export function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid request body',
        details: result.error.flatten(),
      });

      return;
    }

    req.body = result.data as typeof req.body;

    next();
  };
}
