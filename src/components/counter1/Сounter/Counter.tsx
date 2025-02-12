import React, {useEffect, useState} from 'react';
import {CounterBlock} from '../CounterBlock/CounterBlock';
import {SettingsBlock} from '../SettingsBlock/SettingsBlock';
import {Wrapper} from '../../../styles/stylesCounter';
import {FieldType, StatusType, ValuesType} from '../../../types/types';

export const KEY_SETTINGS_VALUES = 'valuesCounter01';
const INITIAL_VALUES: ValuesType = {max: 0, start: 0};

export const Counter = () => {
    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES);
    const [status, setStatus] = useState<StatusType>('notConfigured');

    console.log(values, {status});

    useEffect(() => {
        const getLocalValues = localStorage.getItem(KEY_SETTINGS_VALUES)
        if (getLocalValues) {
            const parseLocalValue = JSON.parse(getLocalValues)
            setValues(parseLocalValue)
        }
    }, []);

    const onChangeValues = (field: FieldType, value: number) => {
        setValues(prev => ({...prev, [field]: value}));
    }

    return (
        <Wrapper>
            <SettingsBlock values={values}
                           onChangeValues={onChangeValues}
                           status={status}
                           setStatus={setStatus}
            />

            <CounterBlock values={values}
                          status={status}
            />
        </Wrapper>
    );
};