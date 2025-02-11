import styled from 'styled-components';
import {PRIMARY_COLOR} from '../../constansts';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

export const Box = styled.div`
     min-width: 340px;
     display: flex;
     flex-direction: column;
     border: 2px solid ${PRIMARY_COLOR};
     border-radius: 10px;
     padding: 15px;
     gap: 15px;
     font-size: 25px;
     color: ${PRIMARY_COLOR};
`

export const BoxScreen = styled.span`
    // max-width: 400px;
    // min-height: 140px;
     padding: 25px;
     border: 2px solid ${PRIMARY_COLOR};
     border-radius: 10px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 20px;

`

export const BoxControlUnit = styled.div`
    min-height: 80px;
    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`