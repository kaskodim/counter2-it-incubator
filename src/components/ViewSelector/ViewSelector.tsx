import React from 'react';
import {Button} from '../../styles/button';
import {Styles, ViewModeTitle} from './styles';
import {VIEW_MODE_LOCAL_STORAGE} from '../../app/App';
import {setLocalStorage} from '../../utils/setLocalStorige';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {changeViewModeAC} from '../../app/reducer';


export const ViewSelector = () => {

    const viewMode = useSelector((state: RootState) => state.app.viewMode);
    const dispatch = useDispatch();

    const onClickViewModeHandler = () => {
        const currentViewMode = viewMode === 'single' ? 'double' : 'single';
        setLocalStorage(VIEW_MODE_LOCAL_STORAGE, currentViewMode);
        dispatch(changeViewModeAC({ viewMode: currentViewMode }));

    };

    return (
        <Styles>
            <ViewModeTitle>{viewMode}</ViewModeTitle>
            <Button onClick={onClickViewModeHandler}
                    style={{width: '120px'}}>
                change it
            </Button>
        </Styles>
    );
};
