import React, {ChangeEvent, useEffect} from 'react';
import {ValuesType, KEY_SETTINGS_VALUES, FieldType, StatusType} from '../Сounter/Counter';
import {Button} from '../../styles/Button';
import {Box, BoxControlUnit, BoxScreen} from '../Сounter/styles';
import {Input, WrapperValues} from './styles';

type SettingsBlockPropsType = {
    values: ValuesType
    onChangeValues: (field: FieldType, value: number) => void
    status: StatusType
    setStatus: (status: StatusType) => void
};

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const [isDisabledResetSettings, setIsDisabledResetSettings] = React.useState<boolean>(false);

    const isNegativeValues = props.values.start < 0 || props.values.max < 0;
    const isStartHigherMaximum = props.values.start >= props.values.max &&
        (props.values.start > 0 || props.values.max > 0);

    const isError = isNegativeValues || isStartHigherMaximum;
    const isValuesZero = props.values.start === 0 && props.values.max === 0;
    const disabledSet = props.status !== 'message' || isValuesZero;


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('max', +e.currentTarget.value);
        setIsDisabledResetSettings(false);
        if(props.status !== 'error') {
            props.setStatus('message')
        }
    };

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('start', +e.currentTarget.value);
        setIsDisabledResetSettings(false);
        if(props.status !== 'error') {
            props.setStatus('message')
        }
    };

    const setSettingsHandler = () => {
        localStorage.setItem(KEY_SETTINGS_VALUES, JSON.stringify(props.values));
        props.setStatus('value');
    }

    const resetSettingsHandler = () => {
        props.onChangeValues('start', 0);
        props.onChangeValues('max', 0);
        setIsDisabledResetSettings(true);
        props.setStatus('message');
        localStorage.removeItem(KEY_SETTINGS_VALUES);
    }

    // переписать useEffect
    useEffect(() => {
        if (isValuesZero && !localStorage.getItem(KEY_SETTINGS_VALUES)) {
            setIsDisabledResetSettings(true);
        }
        if(props.status === 'value') {
            return;
        }
        if (isError) {
            props.setStatus('error');
            return;
        }
        props.setStatus('message');

    }, [isError, isValuesZero, props, props.values, props.status]);

    return (
        <Box>
            <BoxScreen>
                <WrapperValues>
                    <label htmlFor="idMax">max value:</label>
                    <Input
                        id="idMax"
                        type={'number'}
                        value={String(props.values.max)}
                        onChange={onChangeMaxValueHandler}
                        status={props.status}
                    />
                </WrapperValues>

                <WrapperValues>
                    <label htmlFor={'idStart'}>start value:</label>
                    <Input id="idStart"
                           type={'number'}
                           value={String(props.values.start)}
                           onChange={onChangeStartValueHandler}
                           status={props.status}
                    />
                </WrapperValues>
            </BoxScreen>

            <BoxControlUnit>
                <Button disabled={isDisabledResetSettings}
                        onClick={resetSettingsHandler}>
                    reset settings
                </Button>

                <Button disabled={disabledSet}
                        onClick={setSettingsHandler}>
                    set
                </Button>
            </BoxControlUnit>
        </Box>
    );
};

