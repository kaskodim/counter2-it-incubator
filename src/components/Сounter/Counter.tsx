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
    width: 300px;
    border: 2px solid #68d7f6;
    border-radius: 10px;
    padding: 15px;
    gap: 15px;
    display: flex;
    flex-direction: column;
`

export const BoxScreen = styled.span`
    //font-size: 50px;
    min-height: 120px;
    border: 2px solid #68d7f6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const BoxControlUnit = styled.div`
    min-height: 80px;
    border: 2px solid #68d7f6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`