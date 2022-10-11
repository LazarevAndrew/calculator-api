

import { NextFunction, Request, Response } from "express";
import { getCalculationHistory, addCalculationToHistory } from "../../services/calculationHistoryServise";

export async function getCalculations(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await getCalculationHistory()
    res.send(response);
  } catch (error) {
    next(error);
  }
}

export async function postCalculation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await addCalculationToHistory(req.body)
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}