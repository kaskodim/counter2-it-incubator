export type ValuesType = {
    start: number
    max: number
}
export type KeysOfValuesType = keyof ValuesType;
export type StatusType = 'error' | 'setup' | 'ready';
export type ViewModeType = 'single' | 'double';