import React, {useEffect} from 'react';

import {Button} from '../../../styles/Button';
import {Box, BoxControlUnit, BoxScreen} from '../../../styles/stylesCounter';
import {TitleScreen, ValueScreen} from '../../../styles/stylesBlockCounter';
import {StatusType, ValuesType} from '../../../types/types';

type CounterBlockPropsType = {
    values: ValuesType
    status: StatusType
};

export const CounterBlock = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.values.start);

    const isIncDisabled = value === props.values.max || props.status !== 'ready';
    const isResetDisabled = value === props.values.start || props.status !== 'ready';

    const isShowError = props.status === 'error';
    const isShowMessage = props.status === 'notConfigured';
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
    }, [props.values.start]);

    return (
        <Box>
            <BoxScreen>
                {isShowError && <TitleScreen isError>Incorrect value!</TitleScreen>}
                {isShowMessage && <TitleScreen >Enter values and press 'set'</TitleScreen>}
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



