import React, {ChangeEvent, useEffect} from 'react';
import {ValuesType, KEY_VALUES, FieldType} from '../Сounter/Counter';
import {Button} from '../../styles/Button';
import {Box, BoxControlUnit, BoxScreen} from '../Сounter/styles';
import {Input, WrapperValues} from './styles';

type SettingsBlockPropsType = {
    isDisabledSet: boolean
    values: ValuesType
    onChangeValues: (field: FieldType, value: number) => void
    updStatusSetButton: (isPress: boolean) => void
    updErrorStatus: (isError: boolean) => void
    updMessageFlag: (isFlag: boolean) => void
    isError: boolean
}

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    // const [status, setStatus] = useState<'error' | 'message' | 'ready'>('message')
    // перейти на state status


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

                <Button disabled={isPressedResetSettings}
                        onClick={resetSettingsHandler}>
                    reset settings
                </Button>


                <Button
                    disabled={props.isDisabledSet}
                    onClick={setSettingsHandler}>
                    set
                </Button>

            </BoxControlUnit>
        </Box>
    );
};

