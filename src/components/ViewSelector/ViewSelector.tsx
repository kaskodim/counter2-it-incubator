import React from 'react';
import {Button} from '../../styles/button';
import {Styles, ViewModeTitle} from './styles';
import {VIEW_MODE_LOCAL_STORAGE} from '../../app/App';
import {setLocalStorage} from '../../utils/setLocalStorige';
import {useDispatch} from 'react-redux';
import {changeViewModeAC} from '../../app/viewModeReducer';
import {useAppSelector} from '../../common/hooks/useViewModeSelector';
import {selectViewMode} from '../../features/model/viewModeSelector';


export const ViewSelector = () => {

    const viewMode = useAppSelector(selectViewMode);
    const dispatch = useDispatch();

    const onClickViewModeHandler = () => {
        const currentViewMode = viewMode === 'single' ? 'double' : 'single';
        setLocalStorage(VIEW_MODE_LOCAL_STORAGE, currentViewMode);
        dispatch(changeViewModeAC({viewMode: currentViewMode}));
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
