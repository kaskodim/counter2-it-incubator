import styled from 'styled-components';
import {ERROR_COLOR} from '../constansts';

export const TitleScreen = styled.span<{ isError?: boolean }>`
    color: ${props => props.isError ? ERROR_COLOR : ''};
`


// этот компонент вообще не должен быть в курсе про какой-то инкремент, проп должен называться что-то типа isMax
export const ValueScreen = styled.span<{ isMax: boolean }>`
    font-size: ${props => props.isMax ? '50px' : '46px'};
    font-weight: bold;
    color: ${props => props.isMax ? ERROR_COLOR : ''}

`