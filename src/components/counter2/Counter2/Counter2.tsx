import React, {useEffect, useState} from 'react';
import {Settings} from '../Settigs/Settigs';
import {FieldType, StatusType, ValuesType} from '../../../types/types';
import {getLocalStorage} from '../../../utils/getLocalStorage';

const INITIAL_VALUES_STATE: ValuesType = {max: 0, start: 0}
export const INITIAL_LOCAL_STATE: ValuesType = {max: 0, start: 0}
export const KEY_SETTINGS_VALUES = 'counter02'

export const Counter2 = () => {

    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES_STATE);
    const [status, setStatus] = React.useState<StatusType>('notConfigured');
    const [localValues, setLocalValues] = useState<ValuesType>(INITIAL_LOCAL_STATE);

    console.log(values, {status}, localValues)

    useEffect(() => {
        const LocalValue = getLocalStorage(KEY_SETTINGS_VALUES)
        if (LocalValue) {
            setValues(LocalValue)
            setLocalValues(LocalValue)
        }
    }, [])

    const onChangeSetValues = (field: FieldType, number: number) => {
        setValues((prev) => ({...prev, [field]: number}))
    }

    return (
        <div>
            <Settings
                onChangeSetValues={onChangeSetValues}
                values={values}
                setStatus={setStatus}
                status={status}
                localValues={localValues}
                setLocalValues={setLocalValues}
            />
        </div>
    );
};

