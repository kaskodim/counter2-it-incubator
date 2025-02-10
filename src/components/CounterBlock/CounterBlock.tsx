import React, {useEffect} from 'react';
import {ValuesType} from '../Сounter/Counter';
import styled from 'styled-components';
import {Button} from '../../styles/Button';
import {Box, BoxControlUnit, BoxScreen} from '../Сounter/styles';

type CounterBlockPropsType = {
    values: ValuesType
    isError: boolean
    isMassageFlag: boolean
}

export const CounterBlock = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.values.start);

    const isIncDisabled = value === props.values.max || props.isError || props.isMassageFlag
    const isResetDisabled = value === props.values.start || props.isError || props.isMassageFlag

    const onClickAddValue = () => {
        if (value < props.values.max) {
            setValue(value + 1);
        }
    }

    const onClickResetValue = () => {
        setValue(props.values.start);
    }

    useEffect(() => {
        setValue(props.values.start)
    }, [props.values.start]);

    return (
        <Box>
            <BoxScreen>
                {
                    props.isError ? (
                        <TitleScreen isError={props.isError}>Incorrect value!</TitleScreen>
                    ) : props.isMassageFlag ? (
                        <TitleScreen isError={props.isError}>Enter values and press 'set'</TitleScreen>
                    ) : (
                        <ValueScreen isPressedInc={isIncDisabled}>{value}</ValueScreen>
                    )
                }
            </BoxScreen>

            <BoxControlUnit>
                <Button disabled={isIncDisabled}
                        onClick={onClickAddValue}>inc
                </Button>
                <Button disabled={isResetDisabled}
                        onClick={onClickResetValue}>reset
                </Button>
            </BoxControlUnit>
        </Box>
    );
};


const TitleScreen = styled.span<{ isError: boolean }>`
    color: ${props => props.isError ? 'red' : ''};
`

const ValueScreen = styled.span<{ isPressedInc: boolean }>`
    font-size: ${props => props.isPressedInc ? '50px' : '46px'};
    font-weight: bold;
    color: ${props => props.isPressedInc ? 'red' : ''}

`
