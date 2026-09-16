import {NextFunction, Request, Response} from 'express';
import {z} from 'zod';

export function validateQuery(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid query parameters',
        details: z.treeifyError(result.error),
        humanReadable: z.prettifyError(result.error),
      });

      return;
    }

    res.locals.validatedQuery = result.data;
    next();
  };
}

export function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid request body',
        details: z.treeifyError(result.error),
        humanReadable: z.prettifyError(result.error),
      });

      return;
    }

    res.locals.validatedBody = result.data;
    next();
  };
}
