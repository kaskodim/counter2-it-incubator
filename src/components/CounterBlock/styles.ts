import styled from 'styled-components';
import {ERROR_COLOR} from '../../constansts';

export const TitleScreen = styled.span<{ isError: boolean }>`
    color: ${props => props.isError ? ERROR_COLOR : ''};
`

export const ValueScreen = styled.span<{ isPressedInc: boolean }>`
    font-size: ${props => props.isPressedInc ? '50px' : '46px'};
    font-weight: bold;
    color: ${props => props.isPressedInc ? ERROR_COLOR : ''}

`