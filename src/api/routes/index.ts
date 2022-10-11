import { Router } from "express";
import asyncHandler from "express-async-handler";

import { getCalculations,  postCalculation } from "../controlers/calculationHistoryController";

const router = Router();

router.get(
  "/history",
  asyncHandler(getCalculations)
);

router.post(
  "/history",
  asyncHandler(postCalculation)
);

export default router;