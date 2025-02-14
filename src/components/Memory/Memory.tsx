import React from 'react';
import {MemoryScreen} from './styles';

type CounterPropsType = {
    max: number
    start: number
}

export const Memory = (props: CounterPropsType) => {
    return (
        <MemoryScreen>
            memory
            max: {props.max} start: {props.start}
        </MemoryScreen>
    );
};

export default Memory;




