import { Calculation } from "../interfaces";
import { CalculationHistory } from "../db"

export const getCalculationHistory = () => CalculationHistory.findAll();

export const addCalculationToHistory = (data: Calculation) => CalculationHistory.create(data)