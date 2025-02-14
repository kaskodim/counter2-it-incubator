import React from 'react';
import {Button} from '../../../styles/button';
import {ValuesType} from '../../../types/types';
import {ValueScreen} from './styles';
import Memory from '../../../components/Memory/Memory';
import {Box, BoxControlUnit, BoxScreen} from '../styles';


type CountType = {
    values: ValuesType
    changeShowCounter: (flag: boolean) => void
    localValues: ValuesType
};

export const Count = (props: CountType) => {

    const [value, setValue] = React.useState<number>(props.values.start);

    const isDisabledInc = value === props.values.max;
    const isResetDisabled = value === props.values.start;

    const onClickIncHandler = () => {
        if (value < props.values.max) {
            setValue(value + 1);
        }
    };

    const onClickResetHandler = () => {
        setValue(props.values.start);
    };

    const onClickSetHandler = () => {
        props.changeShowCounter(false);
    };


    return (
        <Box>
            <BoxScreen>
                <Memory max={props.values.max}
                        start={props.values.start}/>

                <ValueScreen isMax={isDisabledInc}>
                    {value}
                </ValueScreen>
            </BoxScreen>

            <BoxControlUnit>
                <Button onClick={onClickIncHandler}
                        disabled={isDisabledInc}
                >inc
                </Button>

                <Button onClick={onClickResetHandler}
                        disabled={isResetDisabled}
                >reset
                </Button>

                <Button onClick={onClickSetHandler}
                >set
                </Button>
            </BoxControlUnit>
        </Box>
    );
};
