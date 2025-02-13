import React, {ChangeEvent} from 'react';
import {KEY_SETTINGS_VALUES} from '../DoubleCounter';
import {Button} from '../../../styles/Button';
import {Box, BoxControlUnit, BoxScreen} from '../../../styles/Counter';
import {Input, WrapperInputs, WrapperLabel} from '../../../styles/Settings';
import {getIsError} from '../../../utils/getIsError';
import {FieldType, StatusType, ValuesType} from '../../../types/types';

type SettingsBlockPropsType = {
    values: ValuesType
    onChangeValues: (field: FieldType, value: number) => void
    status: StatusType
    setStatus: (status: StatusType) => void
};

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const isValuesZero = props.values.start === 0 && props.values.max === 0;
    const isDefaultResetBtnDisable = isValuesZero && !localStorage.getItem(KEY_SETTINGS_VALUES);

    const [isDisabledResetSettings, setIsDisabledResetSettings] = React.useState<boolean>(isDefaultResetBtnDisable);
    const disabledSet = props.status !== 'setup' || isValuesZero;

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('max', +e.currentTarget.value);
        setIsDisabledResetSettings(false);
        const isError = getIsError(props.values.start, +e.currentTarget.value);
        props.setStatus(isError ? 'error' : 'setup')
    };
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValues('start', +e.currentTarget.value);
        setIsDisabledResetSettings(false);
        const isError = getIsError(+e.currentTarget.value, props.values.max);
        props.setStatus(isError ? 'error' : 'setup')
    };

    const setSettingsHandler = () => {
        localStorage.setItem(KEY_SETTINGS_VALUES, JSON.stringify(props.values));
        props.setStatus('ready');
        
    }

    const resetSettingsHandler = () => {
        props.onChangeValues('start', 0);
        props.onChangeValues('max', 0);
        setIsDisabledResetSettings(true);
        props.setStatus('setup');
        localStorage.removeItem(KEY_SETTINGS_VALUES);
    }

    return (
        <Box>
            <BoxScreen>
                <WrapperInputs>
                    <WrapperLabel htmlFor="idMax">
                        max value:
                        <Input
                            id="idMax"
                            type={'number'}
                            onChange={onChangeMaxValueHandler}
                            status={props.status}
                            value={String(props.values.max)}/>
                    </WrapperLabel>

                    <WrapperLabel htmlFor={'idStart'}>
                        start value:
                        <Input id="idStart"
                               type={'number'}
                               onChange={onChangeStartValueHandler}
                               status={props.status}
                               value={String(props.values.start)}/>
                    </WrapperLabel>
                </WrapperInputs>
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

