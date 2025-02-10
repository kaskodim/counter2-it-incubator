import React, {useEffect} from 'react';
import {BoxControlUnit, Box, BoxScreen, ValuesType} from '../Сounter/Counter';

type CounterBlockPropsType = {
    values: ValuesType
    isError: boolean
    isMassageFlag: boolean
}

export const CounterBlock = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.values.start);
    const [isPressedInc, setIsPressedInc] = React.useState<boolean>(false);
    const [isPressedReset, setIsPressedReset] = React.useState<boolean>(false);

    useEffect(() => {
        if (value === props.values.max) {
            setIsPressedInc(true)
        }
    }, [value])

    const onClickAddValue = () => {
        setIsPressedReset(false)
        if (value < props.values.max) {
            setValue(value + 1);
        }
    }

    const onClickRemoveValue = () => {
        setValue(props.values.start);
        setIsPressedInc(false)
        setIsPressedReset(true)
    }

    useEffect(() => {
        setValue(props.values.start)

        if (props.isError || props.isMassageFlag) {
            setIsPressedInc(true)
            setIsPressedReset(true)
        } else setIsPressedInc(false)

        if (value === props.values.max) {
            setIsPressedInc(true)
        }

    }, [props.isError, props.isMassageFlag, props.values]);

    return (
        <Box>
            <BoxScreen>
                {
                    props.isError ? (
                        <span>Incorrect value!</span>
                    ) : props.isMassageFlag ? (
                        <span>Enter values and press 'set'</span>
                    ) : (
                        <span>{value}</span>
                    )
                }
            </BoxScreen>

            <BoxControlUnit>
                <button disabled={isPressedInc}
                        onClick={onClickAddValue}>inc
                </button>
                <button disabled={isPressedReset}
                        onClick={onClickRemoveValue}>reset
                </button>
            </BoxControlUnit>
        </Box>
    );
};


