import React, {useEffect} from 'react';
import {CounterBlock} from '../CounterBlock/CounterBlock';
import {SettingsBlock} from '../SettingsBlock/SettingsBlock';
import styled from 'styled-components';

export type ValuesType = {
    start: number
    max: number
}

export const Counter = () => {

    const [values, setValues] = React.useState<ValuesType>(
        {
            max: 0,
            start: 0
        },
    );
    const [isPressedSet, setIsPressedSet] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isMassageFlag, setIsMassageFlag] = React.useState<boolean>(false);

    console.log(values, {isPressedSet}, {isError}, {isMassageFlag})

    useEffect(() => {
        const getLocalValue = localStorage.getItem('values')
        if (getLocalValue) {
            const getLocalValueParse = JSON.parse(getLocalValue)
            setValues(getLocalValueParse)
        }
    }, []);

    const onChangeValues = (field: 'start' | 'max', value: number) => {
        if (field === 'start') {
            setValues((prev) => ({...prev, start: value}));
        }

        if (field === 'max') {
            setValues((prev) => ({...prev, max: value}));
        }
    }

    const onChangeSetButton = (press: boolean) => {
        setIsPressedSet(press)
    }

    const onChangeIsError = (error: boolean) => {
        setIsError(error)
    }

    const onChangeIsMassageFlag = (flag: boolean) => {
        setIsMassageFlag(flag)
    }

    return (
        <Wrapper>
            <SettingsBlock isPressedSet={isPressedSet}
                           values={values}
                           onChangeValues={onChangeValues}
                           onChangeSetButton={onChangeSetButton}
                           onChangeError={onChangeIsError}
                           onChangeIsMassageFlag={onChangeIsMassageFlag}
                           isError={isError}

            />

            <CounterBlock values={values}
                          isError={isError}
                          isMassageFlag={isMassageFlag}
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
    
    &:disabled{
        background-color: #292c35;
    }
`