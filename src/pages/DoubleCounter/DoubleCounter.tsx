import React, {useEffect, useState} from 'react';
import {Count} from './Count/Count';
import {Settings} from './Setting/Settings';
import {KeysOfValuesType, StatusType, ValuesType} from '../../types/types';
import {Wrapper} from './styles';
import {getLocalStorage} from '../../utils/getLocalStorage';

export const KEY_SETTINGS_VALUES = 'double';
const INITIAL_VALUES: ValuesType = {max: 0, start: 0};

export const DoubleCounter = () => {
    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES);
    const [status, setStatus] = useState<StatusType>('setup');

    useEffect(() => {
        const getLocalValues = getLocalStorage(KEY_SETTINGS_VALUES)
        if (getLocalValues) {
            setValues(getLocalValues)
        }
    }, []);

    const onChangeValues = (field: KeysOfValuesType, value: number) => {
        setValues(prev => ({...prev, [field]: value}));
    }

    return (
        <Wrapper>
            <Settings values={values}
                      onChangeValues={onChangeValues}
                      status={status}
                      setStatus={setStatus}
            />

            <Count values={values}
                   status={status}
            />
        </Wrapper>
    );
};