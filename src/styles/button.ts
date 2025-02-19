import styled from 'styled-components';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../constansts';

export const Button = styled.button`
    background-color: ${PRIMARY_COLOR};
    font-size: 20px;
    font-weight: bold;
    border-radius: 6px;
    color: ${SECONDARY_COLOR};
    width: 90px;

    &:active {
        background-color: ${SECONDARY_COLOR};
        color: ${PRIMARY_COLOR};
    }

    &:disabled {
        opacity: 0.3;
        background-color: ${PRIMARY_COLOR};
        color: ${SECONDARY_COLOR};
    }
`