import React, {ChangeEvent} from 'react';
import {Box, BoxControlUnit, BoxScreen} from '../../../styles/stylesCounter';
import styled from 'styled-components';
import {WrapperValues} from '../../../styles/stylesBlockSettings';
import {FieldType, StatusType, ValuesType} from '../Counter2/Counter2';
import {getIsError} from '../../../utils/getIsError';
import {startupSnapshot} from 'node:v8';

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
        //  очисть LocalStorage
        //  status notConfigured
    }

    const onClickSetHandler = () => {
        //     show counter
    }

    return (
        <Box>
            <BoxScreen>
                <MemoryScreen>memory: local value</MemoryScreen>

                <WrapperValues>
                    <label htmlFor={'idMax'}> max value
                        <input id="idMax"
                               type={'number'}
                               onChange={onChangeMaxHandler}
                               value={(props.values.max).toString()}
                        />
                    </label>
                </WrapperValues>

                <WrapperValues>
                    <label htmlFor={'idStart'}> start value
                        <input id="idStart"
                               type={'number'}
                               onChange={onChangeStartHandler}
                               value={(props.values.start).toString()}

                        />
                    </label>
                </WrapperValues>
            </BoxScreen>


            <BoxControlUnit>

                <button onClick={onClickResetHandler}
                        disabled={isDisabledReset}


                >reset
                </button>


                <button onClick={onClickSetHandler}
                        disabled={isDisabledSet}

                >set
                </button>


            </BoxControlUnit>
        </Box>
    );
};


const MemoryScreen = styled.span`
    width: 100%;
    font-size: 16px;
    display: flex;
    justify-content: start;
`