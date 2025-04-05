import styled from 'styled-components';
import { Button } from "../../styles/button"

export const MemoryScreen = styled.span`
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 14px;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;

`

export const GetButton = styled(Button)`
    height: 20px;
    font-size: 10px;
    width: 40px;
    margin-right: 10px

`