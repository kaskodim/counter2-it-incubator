import React, {useEffect} from 'react';
import {CounterBlock} from '../CounterBlock/CounterBlock';
import {SettingsBlock} from '../SettingsBlock/SettingsBlock';
import {Wrapper} from './styles';

const INITIAL_VALUES =  {max: 0, start: 0}
export const KEY_VALUES = 'values'

export type ValuesType = {
    start: number
    max: number
}
export type FieldType = keyof ValuesType;

export const Counter = () => {

    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES);
    const [isDisabledSet, setIsDisabledSet] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isMessageFlag, setIsMessageFlag] = React.useState<boolean>(false);

    console.log(values, {isDisabledSet}, {isError}, {isMessageFlag})

    useEffect(() => {
        const getLocalValue = localStorage.getItem(KEY_VALUES)
        if (getLocalValue) {
            const getLocalValueParse = JSON.parse(getLocalValue)
            setValues(getLocalValueParse)
        }
    }, []);

    const onChangeValues = (field: FieldType, value: number) => {

        if (field === 'start') {
            setValues((prev) => ({...prev, start: value}));
        }
        if (field === 'max') {
            setValues((prev) => ({...prev, max: value}));
        }
    }
    const updStatusSetButton = (isPress: boolean) => {
        setIsDisabledSet(isPress)
    }
    const updErrorStatus = (isError: boolean) => {
        setIsError(isError)
    }
    const updMessageFlag = (isFlag: boolean) => {
        setIsMessageFlag(isFlag)
    }

    return (
        <Wrapper>
            <SettingsBlock isDisabledSet={isDisabledSet}
                           values={values}
                           onChangeValues={onChangeValues}
                           updStatusSetButton={updStatusSetButton}
                           updErrorStatus={updErrorStatus}
                           updMessageFlag={updMessageFlag}
                           isError={isError}
            />

            <CounterBlock values={values}
                          isError={isError}
                          isMassageFlag={isMessageFlag}
            />
        </Wrapper>
    );
};