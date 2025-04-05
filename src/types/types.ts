export type ValuesType = {
    start: number
    max: number
}
export type KeysOfValuesType = keyof ValuesType;
export type StatusType = 'error' | 'setup' | 'ready';
export type ViewModeType = 'single' | 'double';

export type DoubleCounterType = {
    values: ValuesType
    status: StatusType
    isDisabledResetSettings: boolean
}


export type SingleCounterType = {
    stateValues: ValuesType
    showCounter: boolean
    localValues: ValuesType
    status: StatusType
}

export type ChangeValuePayload = {
    field: KeysOfValuesType;
    value: number;
};
