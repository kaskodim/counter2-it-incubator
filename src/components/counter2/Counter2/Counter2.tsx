import React from 'react';
import {Settings} from '../Settigs/Settigs';


export type ValuesType = {
    max: number
    start: number
}
export type FieldType = 'max' | 'start'
export type StatusType = 'error' | 'ready' | 'notConfigured';
const INITIAL_VALUES_STATE: ValuesType = {max: 0, start: 0,}


export const Counter2 = () => {

    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES_STATE);
    const [status, setStatus] = React.useState<StatusType>('notConfigured');

    console.log(values, {status})


    const onChangeSetValues = ( field: FieldType, number: number ) => {
        setValues((prev)=> ({...prev, [field]: number}))
    }


    return (
        <div>
            <Settings
                onChangeSetValues={onChangeSetValues}
                values={values}
                setStatus={setStatus}
                status={status}

            />
        </div>
    );
};

