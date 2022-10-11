import { Database } from 'fakebase';

const db = new Database('./data');

export const CalculationHistory = db.table('calculations');