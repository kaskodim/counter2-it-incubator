import React, {useEffect} from 'react';
import {Button} from '../../../styles/button';
import {StatusType, ValuesType} from '../../../types/types';
import {Box, BoxControlUnit, BoxScreen} from '../styles';
import {TitleScreen, ValueScreen} from './styles';

type CounterBlockPropsType = {
    values: ValuesType
    status: StatusType
};

export const Count = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.values.start);

    const isIncDisabled = value === props.values.max || props.status !== 'ready';
    const isResetDisabled = value === props.values.start || props.status !== 'ready';

    const isShowError = props.status === 'error';
    const isShowMessage = props.status === 'setup';
    const isShowValue = props.status === 'ready';

    const onClickAddValue = () => {
        if (value < props.values.max) {
            setValue(value + 1);
        }
    }
    const onClickResetValue = () => {
        setValue(props.values.start);
    }


    useEffect(() => {
        setValue(props.values.start)
    }, [props.values]);

    return (
        <Box>
            <BoxScreen>
                {isShowError && <TitleScreen isError>Incorrect value!</TitleScreen>}
                {isShowMessage && <TitleScreen>Enter values and press 'set'</TitleScreen>}
                {isShowValue && <ValueScreen isMax={isIncDisabled}>{value}</ValueScreen>}
            </BoxScreen>

            <BoxControlUnit>
                <Button disabled={isIncDisabled}
                        onClick={onClickAddValue}>inc
                </Button>
                <Button disabled={isResetDisabled}
                        onClick={onClickResetValue}>reset
                </Button>
            </BoxControlUnit>
        </Box>
    );
};



