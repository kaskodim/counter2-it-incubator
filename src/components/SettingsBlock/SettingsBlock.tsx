import React, {ChangeEvent} from 'react';
import {BoxControlUnit, Box, BoxScreen} from '../Сounter/Counter';

type SettingsBlockPropsType = {
    onChangeStart: (value: number) => void
    onChangeMax: (value: number) => void
}


export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const [currentValue, setCurrentValue] = React.useState<number>(0);
    const [maxCurrentValue, setMaxCurrentValue] = React.useState<number>(0);


    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(+e.currentTarget.value)
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCurrentValue(+e.currentTarget.value)
    }

    const setSettingsHandler = () => {
        props.onChangeStart(currentValue)
        props.onChangeMax(maxCurrentValue)
    }


    return (
        <Box>
            <BoxScreen>
                <div>
                    <span>max value:</span>
                    <input type={'number'}
                           onChange={onChangeMaxHandler}
                           value={maxCurrentValue}
                    />
                </div>
                <div>
                    <span>start value:</span>
                    <input type={'number'}
                           value={currentValue}
                           onChange={onChangeStartHandler}
                    />
                </div>
            </BoxScreen>
            <BoxControlUnit>
                <button onClick={setSettingsHandler}

                >set
                </button>
            </BoxControlUnit>

        </Box>
    );
};
