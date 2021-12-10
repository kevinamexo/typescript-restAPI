import { Request, Response } from "express";
import logger from "../utils/logger";
export default function createUserHandler(req: Request, res: Response) {
  try {
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
