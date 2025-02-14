import styled from 'styled-components';
import {PRIMARY_COLOR} from '../../constansts';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

export const Box = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 10px;
    padding: 15px;
    gap: 15px;
    font-size: 25px;
    color: ${PRIMARY_COLOR};
    user-select: none;
`

export const BoxScreen = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 10px;
    height: 160px;
    position: relative;
`

export const BoxControlUnit = styled.div`
    min-height: 80px;
    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`