import styled from 'styled-components';
import {ERROR_COLOR, ERROR_COLOR_TRANSPARENT, PRIMARY_COLOR} from '../../constansts';

export const WrapperValues = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const Input = styled.input<{ isError: boolean }>`
    border-radius: 5px;
    outline: none;
    background-color: ${props => props.isError ? ERROR_COLOR_TRANSPARENT : ''};
    border: 4px solid ${props => props.isError ? ERROR_COLOR : PRIMARY_COLOR};

`
