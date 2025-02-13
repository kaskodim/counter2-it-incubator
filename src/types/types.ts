export type ValuesType = {
    start: number
    max: number
}
export type FieldType = keyof ValuesType;
export type StatusType = 'error' | 'setup' | 'ready';
export type ViewModeType = 'single' | 'double';