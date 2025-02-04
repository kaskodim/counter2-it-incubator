import React from 'react';
import {CounterBlock} from '../CounterBlock/CounterBlock';
import {SettingsBlock} from '../SettingsBlock/SettingsBlock';
import styled from 'styled-components';


export const Counter = () => {

const [startValue, setStartValue] = React.useState<number>(0);
const [maxValue, setMaxValue] = React.useState<number>(0);

    console.log({startValue}, {maxValue})

    const onChangeStart = (value: number) => {
        setStartValue(value)
    }
    const onChangeMax = (value: number) => {
        setMaxValue(value)
    }



    return (
        <Wrapper>
            <SettingsBlock onChangeStart={onChangeStart}
                           onChangeMax={onChangeMax}
            />






            <CounterBlock startValue={startValue}
                          maxValue={maxValue}

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