import React, {ChangeEvent} from 'react';
import {Box, BoxControlUnit, BoxScreen} from '../../../styles/stylesCounter';
import {Input, MemoryScreen, WrapperValues} from '../../../styles/stylesBlockSettings';
import {getIsError} from '../../../utils/getIsError';
import {FieldType, StatusType, ValuesType} from '../../../types/types';
import {KEY_SETTINGS_VALUES} from '../Counter2/Counter2';

type SettingsPropsType = {
    onChangeSetValues: (field: FieldType, number: number) => void
    values: ValuesType
    setStatus: (status: StatusType) => void
    status: StatusType
}

export const Settings = (props: SettingsPropsType) => {

    const isDisabledReset = props.values.start === 0 && props.values.max === 0  // and not LocalStorage
    const isDisabledSet = props.status !== 'ready'

    function getIsValuesZero(start: number, max: number) {
        return start === 0 && max === 0
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSetValues('max', +e.currentTarget.value)

        const isValueZero = getIsValuesZero(props.values.start, +e.currentTarget.value)
        const error = getIsError(props.values.start, +e.currentTarget.value)

        if (isValueZero) {
            props.setStatus('notConfigured')
            return
        }
        props.setStatus(error ? 'error' : 'ready')
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSetValues('start', +e.currentTarget.value)

        const isValueZero = getIsValuesZero(+e.currentTarget.value, props.values.max);
        const error = getIsError(+e.currentTarget.value, props.values.max)

        if (isValueZero) {
            props.setStatus('notConfigured')
            return
        }
        props.setStatus(error ? 'error' : 'ready')
    }

    const onClickResetHandler = () => {
        props.onChangeSetValues('max', 0)
        props.onChangeSetValues('start', 0)
        localStorage.removeItem(KEY_SETTINGS_VALUES)
        props.setStatus('notConfigured')
    }

    const onClickSetHandler = () => {
        localStorage.setItem(KEY_SETTINGS_VALUES, JSON.stringify(props.values)  )
        //     show counter
    }

    return (
        <Box>
            <BoxScreen>
                <MemoryScreen>memory: local value</MemoryScreen>

                <WrapperValues>
                    <label htmlFor={'idMax'}> max value
                        <Input id="idMax"
                               type={'number'}
                               onChange={onChangeMaxHandler}
                               value={(props.values.max).toString()}
                               status={props.status}
                        />
                    </label>
                </WrapperValues>

                <WrapperValues>
                    <label htmlFor={'idStart'}> start value
                        <Input id="idStart"
                               type={'number'}
                               onChange={onChangeStartHandler}
                               value={(props.values.start).toString()}
                               status={props.status}
                        />
                    </label>
                </WrapperValues>
            </BoxScreen>


            <BoxControlUnit>

                <button onClick={onClickResetHandler}
                        disabled={isDisabledReset}>
                    reset
                </button>

                <button onClick={onClickSetHandler}
                        disabled={isDisabledSet}>
                    set
                </button>

            </BoxControlUnit>
        </Box>
    );
};


