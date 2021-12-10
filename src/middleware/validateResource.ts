/// VALIDATE THE REQUEST AGAINST A SCHEMA WITH ZOD
import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validator = (schema: AnyZodObject) => (
  req: Request,
  res: Response,
  next: NextFunction
) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      /// to check if the request properties are valid
      body: req.body,
      query: req.query,
      params: req.params,
    });
  } catch (e) {
    return res.status(400).send(e.errors);
  }
};

//
