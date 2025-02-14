import styled from 'styled-components';
import {COMPLEMENTARY_COLOR, ERROR_COLOR, ERROR_COLOR_TRANSPARENT, PRIMARY_COLOR} from '../constansts';
import {StatusType} from '../types/types';

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    gap: 8px;
`

export const WrapperLabel = styled.label`
    display: flex;
    justify-content: space-around;
`

export const Input = styled.input<{ status: StatusType }>`
    border-radius: 5px;
    background-color: ${props => props.status === 'error' ? ERROR_COLOR_TRANSPARENT : COMPLEMENTARY_COLOR};
    border: 4px solid ${props => props.status === 'error' ? ERROR_COLOR : PRIMARY_COLOR};
    width: 70px;
    padding: 6px 8px;
    font-weight: bold;
    user-select: none;
    box-shadow: inset 0 0 10px 4px rgba(0, 0, 0, 0.3);
`

