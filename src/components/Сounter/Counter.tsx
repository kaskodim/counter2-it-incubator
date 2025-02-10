import React, {useEffect} from 'react';
import {CounterBlock} from '../CounterBlock/CounterBlock';
import {SettingsBlock} from '../SettingsBlock/SettingsBlock';
import styled from 'styled-components';


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

    console.log(values, {isDisabledSet}, {isError}, {isMassageFlag: isMessageFlag})

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


const Wrapper = styled.div`
    display: flex;
    gap: 40px;

`

export const Box = styled.div`
    min-width: 400px;
    border: 2px solid #68D7F6FF;
    border-radius: 10px;
    padding: 15px;
    gap: 15px;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    color: #68D7F6FF;
`

export const BoxScreen = styled.span`

    min-height: 140px;
    border: 2px solid #68d7f6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;


`

export const BoxControlUnit = styled.div`
    min-height: 80px;
    border: 2px solid #68d7f6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const Button = styled.button`
    background-color: #68d7f6;
    font-size: 25px;
    font-weight: bold;

    &:disabled {
        background-color: #292c35;
    }
`