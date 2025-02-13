import React from 'react';
import {Box, BoxControlUnit, BoxScreen, MemoryScreen} from '../../../styles/Counter';
import {Button} from '../../../styles/Button';
import {ValuesType} from '../../../types/types';
import {ValueScreen} from '../../../styles/Count';

type CountType = {
    values: ValuesType
    changeShowCounter: (flag: boolean) => void
    localValues: ValuesType
}

export const Count = (props: CountType) => {

    const [value, setValue] = React.useState<number>(props.values.start);

    const isDisabledInc = value === props.values.max;

    const onClickIncHandler = () => {
        if (value < props.values.max) {
            setValue(value + 1);
        }
    }

    const onClickResetHandler = () => {
        setValue(props.values.start)
    }

    const onClickSetHandler = () => {
        props.changeShowCounter(false)
    }


    return (
        <Box>
            <BoxScreen>

                <MemoryScreen>
                    memory
                    max: {props.localValues.max} start: {props.localValues.start}
                </MemoryScreen>
                <ValueScreen isMax={isDisabledInc}>
                    {value}
                </ValueScreen>

            </BoxScreen>

            <BoxControlUnit>


                <Button onClick={onClickSetHandler}
                >set
                </Button>

                <Button onClick={onClickResetHandler}
                >reset
                </Button>

                <Button onClick={onClickIncHandler}
                        disabled={isDisabledInc}
                >inc
                </Button>

            </BoxControlUnit>

        </Box>
    );
};
