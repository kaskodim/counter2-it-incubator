export type ValuesType = {
    start: number
    max: number
}
export type FieldType = keyof ValuesType;
export type StatusType = 'error' | 'notConfigured' | 'ready';