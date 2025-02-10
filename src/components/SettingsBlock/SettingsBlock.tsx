import React, {ChangeEvent, useEffect} from 'react';
import {BoxControlUnit, Box, BoxScreen, ValuesType} from '../Сounter/Counter';

type SettingsBlockPropsType = {
    isPressedSet: boolean
    values: ValuesType
    onChangeValues: (field: 'start' | 'max', value: number) => void
    onChangeSetButton: (press: boolean) => void
    onChangeError: (error: boolean) => void
    onChangeIsMassageFlag: (flag: boolean) => void
}

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const [isPressedResetSettings, setIsPressedResetSettings] = React.useState<boolean>(false);

    const negativeValues = props.values.start < 0 || props.values.max < 0
    const startHigherMaximum = props.values.start >= props.values.max &&
        (props.values.start > 0 || props.values.max > 0)

    const error = negativeValues || startHigherMaximum
    const valuesZero = props.values.start === 0 && props.values.max === 0

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('max', +e.currentTarget.value)
        setIsPressedResetSettings(false)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChangeValues('start', +e.currentTarget.value)
        setIsPressedResetSettings(false)
    }

    const setSettingsHandler = () => {
        localStorage.setItem('values', JSON.stringify(props.values));
        props.onChangeSetButton(true)
        props.onChangeIsMassageFlag(false)
        props.onChangeError(false)
    }

    const resetSettingsHandler = () => {
        props.onChangeValues('start', 0)
        props.onChangeValues('max', 0)
        setIsPressedResetSettings(true)
        props.onChangeSetButton(true)
        props.onChangeError(false)
        props.onChangeIsMassageFlag(false)
        localStorage.clear()
    }

    useEffect(() => {
        if (valuesZero && !localStorage.getItem('values')) {
            setIsPressedResetSettings(true)
        }

        if (error) {
            props.onChangeError(true)
            props.onChangeIsMassageFlag(false)
            props.onChangeSetButton(true)

        } else if (!error && valuesZero) {
            props.onChangeError(false)
            props.onChangeIsMassageFlag(true)
            props.onChangeSetButton(true)

        } else if (!error && !valuesZero) {
            props.onChangeIsMassageFlag(true)
            props.onChangeError(false)
            props.onChangeSetButton(false)
        }

    }, [props.values])


    return (
        <Box>
            <BoxScreen>
                <div>
                    <span>max value:</span>
                    <input type={'number'}
                           value={props.values.max}
                           defaultValue={0}
                           onChange={onChangeMaxValueHandler}

                    />
                </div>
                <div>
                    <span>start value:</span>
                    <input type={'number'}
                           value={props.values.start}
                           defaultValue={0}
                           onChange={onChangeStartValueHandler}
                    />
                </div>
            </BoxScreen>
            <BoxControlUnit>

                <button disabled={isPressedResetSettings}
                        onClick={resetSettingsHandler}>
                    reset settings
                </button>


                <button
                    disabled={props.isPressedSet}
                    onClick={setSettingsHandler}>
                    set
                </button>

            </BoxControlUnit>
        </Box>
    );
};
