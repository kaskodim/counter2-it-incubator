import React, {ChangeEvent, useEffect} from 'react';
import {BoxControlUnit, Box, BoxScreen} from '../Сounter/Counter';

type SettingsBlockPropsType = {
    onChangeStart: (value: number) => void
    onChangeMax: (value: number) => void
    onChangeSetButton: (press: boolean) => void
    isPressedSet: boolean
    startValue: number
    maxValue: number
    onChangeError: (error: boolean) => void

}


export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax(+e.currentTarget.value)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart(+e.currentTarget.value)
    }

    const setSettingsHandler = () => {
        props.onChangeSetButton(true)
    }

    const error = props.startValue >= props.maxValue && props.startValue > 0 ||
        props.startValue >= props.maxValue && props.maxValue > 0
    // todo добавить инпут меньше единицы




    useEffect(() => {
        if (error) {
            props.onChangeError(true)
            props.onChangeSetButton(true)
        } else {
            props.onChangeError(false)
            props.onChangeSetButton(false)
        }
    }, [props.startValue, props.maxValue])


    return (
        <Box>
            <BoxScreen>
                <div>
                    <span>max value:</span>
                    <input type={'number'}
                           onChange={onChangeMaxValueHandler}

                    />
                </div>
                <div>
                    <span>start value:</span>
                    <input type={'number'}
                           onChange={onChangeStartValueHandler}


                    />
                </div>
            </BoxScreen>
            <BoxControlUnit>

                <button disabled={props.isPressedSet}
                        onClick={setSettingsHandler}
                >set
                </button>

            </BoxControlUnit>

        </Box>
    );
};
