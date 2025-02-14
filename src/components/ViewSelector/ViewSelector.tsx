import React from 'react';
import {Button} from '../../styles/button';
import {ViewModeType} from '../../types/types';
import {ViewModeTitle, Styles} from './styles';
import {VIEW_MODE_LOCAL_STORAGE} from '../../App';
import {setLocalStorage} from '../../utils/setLocalStorige';

type ViewSelectorPropsType = {
    viewMode: ViewModeType
    setViewMode: (viewMode: ViewModeType) => void
};

export const ViewSelector = (props: ViewSelectorPropsType) => {

    const onClickViewModeHandler = () => {
        const currentViewMode = props.viewMode === 'single' ? 'double' : 'single';
        setLocalStorage(VIEW_MODE_LOCAL_STORAGE, currentViewMode);
        props.setViewMode(currentViewMode);

    };

    return (
        <Styles>
            <ViewModeTitle>{props.viewMode}</ViewModeTitle>
            <Button onClick={onClickViewModeHandler}
                    style={{width: '120px'}}>
                change it
            </Button>
        </Styles>
    );
};
