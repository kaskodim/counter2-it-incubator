import React, {useEffect} from 'react';
import {Settings} from './Settigs/Settigs';
import {KeysOfValuesType, StatusType, ValuesType} from '../../types/types';
import {getLocalStorage} from '../../utils/getLocalStorage';
import {Count} from './Count/Count';
import {Wrapper} from './styles';

const INITIAL_VALUES_STATE: ValuesType = {max: 0, start: 0};
export const INITIAL_LOCAL_STATE: ValuesType = {max: 0, start: 0};
export const KEY_SETTINGS_VALUES = 'single';

export const SingleCounter = () => {

    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES_STATE);
    const [showCounter, setShowCounter] = React.useState(false);
    const [localValues, setLocalValues] = React.useState<ValuesType>(INITIAL_LOCAL_STATE);
    const [status, setStatus] = React.useState<StatusType>('setup');

    useEffect(() => {
        const LocalValue = getLocalStorage(KEY_SETTINGS_VALUES)
        if (LocalValue) {
            setValues(LocalValue);
            setLocalValues(LocalValue);
            setStatus('ready');
        }
    }, [])

    const onChangeSetValues = (field: KeysOfValuesType, number: number) => {
        setValues((prev) => ({...prev, [field]: number}));
    }

    const changeShowCounter = (flag: boolean) => {
        setShowCounter(flag);
    }

    return (
        <Wrapper>
            {showCounter && <Count values={values}
                                   changeShowCounter={changeShowCounter}
                                   localValues={localValues}/>
            }

            {!showCounter && <Settings onChangeSetValues={onChangeSetValues}
                                       values={values}
                                       changeShowCounter={changeShowCounter}
                                       setLocalValues={setLocalValues}
                                       localValues={localValues}
                                       status={status}
                                       setStatus={setStatus}/>
            }
        </Wrapper>
    );
};

