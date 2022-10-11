import { Router } from "express";
import asyncHandler from "express-async-handler";

import getCalculationHistory from "../controlers/calculationHistoryController";

const router = Router();

router.get(
  "/history",
  asyncHandler(getCalculationHistory)
);

export default router;