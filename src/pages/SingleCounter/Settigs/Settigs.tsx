import React, {ChangeEvent} from 'react';
import {Input, WrapperInputs, WrapperLabel} from '../../../styles/inputStyles';
import {getIsError} from '../../../utils/getIsError';
import {KeysOfValuesType, StatusType, ValuesType} from '../../../types/types';
import {INITIAL_LOCAL_STATE, KEY_SETTINGS_VALUES} from '../SingleCounter';
import {Button} from '../../../styles/button';
import {getIsValuesZero} from '../../../utils/getIsValuesZero';
import {getLocalStorage} from '../../../utils/getLocalStorage';
import {Box, BoxControlUnit, BoxScreen} from '../styles';
import {setLocalStorage} from '../../../utils/setLocalStorige';
import Memory from '../../../components/Memory/Memory';

type SettingsPropsType = {
    onChangeSetValues: (field: KeysOfValuesType, number: number) => void
    values: ValuesType
    changeShowCounter: (flag: boolean) => void
    setLocalValues: (values: ValuesType) => void
    localValues: ValuesType
    status: StatusType
    setStatus: (status: StatusType) => void
};

export const Settings = (props: SettingsPropsType) => {

        const notLocalStorage = !localStorage.getItem(KEY_SETTINGS_VALUES);
        const isValuesAreZero = props.values.start === 0 && props.values.max === 0;
        const isDisabledReset = isValuesAreZero && notLocalStorage;
        const isDisabledSet = props.status !== 'ready';

        const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeSetValues('max', +e.currentTarget.value);
            const isValueZero = getIsValuesZero(props.values.start, +e.currentTarget.value);
            const error = getIsError(props.values.start, +e.currentTarget.value);
            if (isValueZero) {
                props.setStatus('setup');
                return
            }
            props.setStatus(error ? 'error' : 'ready');
        };

        const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeSetValues('start', +e.currentTarget.value);
            const isValueZero = getIsValuesZero(+e.currentTarget.value, props.values.max);
            const error = getIsError(+e.currentTarget.value, props.values.max);
            if (isValueZero) {
                props.setStatus('setup');
                return
            }
            props.setStatus(error ? 'error' : 'ready');
        };

        const onClickResetHandler = () => {
            props.onChangeSetValues('max', 0);
            props.onChangeSetValues('start', 0);
            props.setStatus('setup');
        };

        const onClickMemoryClearHandler = () => {
            props.onChangeSetValues('max', 0);
            props.onChangeSetValues('start', 0);
            props.setStatus('setup');

            localStorage.removeItem(KEY_SETTINGS_VALUES);
            props.setLocalValues(INITIAL_LOCAL_STATE);
        };

        const onClickSetHandler = () => {
            setLocalStorage(KEY_SETTINGS_VALUES, props.values);
            const LocalValue = getLocalStorage(KEY_SETTINGS_VALUES);
            if (LocalValue) {
                props.setLocalValues(LocalValue);
                props.changeShowCounter(true);
            }
        };

        return (
            <Box>
                <BoxScreen>
                    <Memory max={props.localValues.max}
                            start={props.localValues.start}/>

                    <WrapperInputs>
                        <WrapperLabel htmlFor={'idMax'}>
                            max value:
                            <Input id="idMax"
                                   type={'number'}
                                   onChange={onChangeMaxHandler}
                                   value={String(props.values.max)}
                                   status={props.status}/>
                        </WrapperLabel>

                        <WrapperLabel htmlFor={'idStart'}> start value:
                            <Input id="idStart"
                                   type={'number'}
                                   onChange={onChangeStartHandler}
                                   value={String(props.values.start)}
                                   status={props.status}/>
                        </WrapperLabel>
                    </WrapperInputs>
                </BoxScreen>

                <BoxControlUnit>
                    <Button onClick={onClickResetHandler}
                            disabled={isDisabledReset}>
                        reset
                    </Button>

                    <Button onClick={onClickMemoryClearHandler}
                            disabled={notLocalStorage}>
                        clear
                    </Button>

                    <Button onClick={onClickSetHandler}
                            disabled={isDisabledSet}>
                        set
                    </Button>
                </BoxControlUnit>
            </Box>
        );
    }
;


