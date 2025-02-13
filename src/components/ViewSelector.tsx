import React from 'react';
import {Wrapper} from '../styles/Counter';
import {ViewModeTitle} from '../styles/AppStyles';
import {Button} from '../styles/Button';
import {ViewModeType} from '../types/types';

type ViewSelectorPropsType = {
    viewMode: ViewModeType
    setViewMode: (viewMode: ViewModeType) => void
}

export const ViewSelector = (props: ViewSelectorPropsType) => {

    const onClickViewModeHandler = () => {
        props.viewMode === 'single' ? props.setViewMode('double') : props.setViewMode('single')
    }

    return (
        <div>
            {props.viewMode === 'single' &&
                <Wrapper>
                    <Button onClick={onClickViewModeHandler}>
                        change it
                    </Button>
                    <ViewModeTitle>{props.viewMode}</ViewModeTitle>
                </Wrapper>}

            {props.viewMode === 'double' &&
                <Wrapper>
                    <ViewModeTitle>{props.viewMode}</ViewModeTitle>
                    <Button onClick={onClickViewModeHandler}>
                        change it
                    </Button>
                </Wrapper>}
        </div>
    );
};
