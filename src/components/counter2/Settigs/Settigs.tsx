import React from 'react';
import {Box, BoxControlUnit, BoxScreen} from '../../../styles/styles';
import styled from 'styled-components';

export const Settigs = () => {
    return (
        <Box>
            <BoxScreen>
                <MemoryScreen>Memory: local value</MemoryScreen>


                <span> max value </span>
                <input type={'number'}/>


                <span>  start value  </span>
                <input type={'number'}/>

            </BoxScreen>
            <BoxControlUnit>

                <button>reset</button>
                <button>set</button>


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