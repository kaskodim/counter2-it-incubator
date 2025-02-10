import React, {ChangeEvent, useEffect, useState} from 'react';
import {BoxControlUnit, Box, BoxScreen, ValuesType, Button, KEY_VALUES, FieldType} from '../Сounter/Counter';
import styled from 'styled-components';

type SettingsBlockPropsType = {
    isDisabledSet: boolean
    values: ValuesType
    onChangeValues: (field: FieldType, value: number) => void
    updStatusSetButton: (isPress: boolean) => void
    updErrorStatus: (error: boolean) => void
    updMessageFlag: (flag: boolean) => void
    isError: boolean
}

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const [status, setStatus] = useState<'error' | 'message' | 'success'>('error')
    const [isPressedResetSettings, setIsPressedResetSettings] = React.useState<boolean>(false);

    const isNegativeValues = props.values.start < 0 || props.values.max < 0;
    const isStartHigherMaximum = props.values.start >= props.values.max &&
        (props.values.start > 0 || props.values.max > 0);

    const isError = isNegativeValues || isStartHigherMaximum
    const isValuesZero = props.values.start === 0 && props.values.max === 0

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('max', +e.currentTarget.value)
        setIsPressedResetSettings(false)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('start', +e.currentTarget.value)
        setIsPressedResetSettings(false)
    }

    const setSettingsHandler = () => {
        localStorage.setItem(KEY_VALUES, JSON.stringify(props.values));
        props.updStatusSetButton(true)
        props.updMessageFlag(false)
        props.updErrorStatus(false)
    }

    const resetSettingsHandler = () => {
        props.onChangeValues('start', 0)
        props.onChangeValues('max', 0)
        setIsPressedResetSettings(true)
        props.updStatusSetButton(true)
        props.updErrorStatus(false)
        props.updMessageFlag(false)
        localStorage.clear()
    }


    // переписать useEffect
    useEffect(() => {
        if (isValuesZero && !localStorage.getItem(KEY_VALUES)) {
            setIsPressedResetSettings(true)
        }

        if (isError) {
            props.updErrorStatus(true)
            props.updMessageFlag(false)
            props.updStatusSetButton(true)

        } else if (isValuesZero) {
            props.updErrorStatus(false)
            props.updMessageFlag(true)
            props.updStatusSetButton(true)

        } else if (!isError && !isValuesZero) {
            props.updMessageFlag(true)
            props.updErrorStatus(false)
            props.updStatusSetButton(false)
        }
    }, [props.values])


    return (
        <Box>
            <BoxScreen>
                <WrapperValues>
                    <span>max value:</span>
                    <Input type={'number'}
                           value={props.values.max}
                           onChange={onChangeMaxValueHandler}
                           isError={props.isError}
                    />
                </WrapperValues>
                <WrapperValues>
                    <span>start value:</span>
                    <Input type={'number'}
                           value={props.values.start}
                           onChange={onChangeStartValueHandler}
                           isError={props.isError}
                    />
                </WrapperValues>
            </BoxScreen>
            <BoxControlUnit>

                <button disabled={isPressedResetSettings}
                        onClick={resetSettingsHandler}>
                    reset settings
                </button>


                <button
                    disabled={props.isDisabledSet}
                    onClick={setSettingsHandler}>
                    set
                </button>

            </BoxControlUnit>
        </Box>
    );
};

const WrapperValues = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Input = styled.input<{ isError: boolean }>`
    border-radius: 5px;
    outline: none;
    background-color: ${props => props.isError ? '#ffe0e0' : ''};
    border: ${props => props.isError ? '4px solid red' : '4px solid #68D7F6FF'};



`