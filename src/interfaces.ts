export enum CalculationStatus {
    SUCCESS,
    ERROR
};

export interface Calculation {
    calc: string;
    status: CalculationStatus
}