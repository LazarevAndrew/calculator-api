

import { NextFunction, Request, Response } from "express";

export default async function getCalculationHistory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = [{calc: 1223, status: "SUCCESS"}];
    res.send(response);
  } catch (error) {
    next(error);
  }
}