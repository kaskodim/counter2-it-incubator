import React, {useEffect} from 'react';
import {SingleCounter} from '../pages/SingleCounter/SingleCounter';
import {AppStyles} from '../styles/appStyles';
import {ViewSelector} from '../components/ViewSelector/ViewSelector';
import {DoubleCounter} from '../pages/DoubleCounter/DoubleCounter';
import {getLocalStorage} from '../utils/getLocalStorage';
import {useDispatch} from 'react-redux';
import {changeViewModeAC} from './viewModeReducer';
import {selectViewMode} from '../features/model/viewModeSelector';
import {useViewModeSelector} from '../common/hooks/useViewModeSelector';

export const VIEW_MODE_LOCAL_STORAGE = 'viewMode'

function App() {

    const viewMode = useViewModeSelector(selectViewMode);
    const dispatch = useDispatch();

    useEffect(() => {
        const getLocalViewMode = getLocalStorage(VIEW_MODE_LOCAL_STORAGE)
        if (getLocalViewMode) {
            dispatch(changeViewModeAC({viewMode: getLocalViewMode}));
        }
    }, [])

    return (
        <AppStyles>
            <ViewSelector/>

            {viewMode === 'single' && <SingleCounter/>}
            {viewMode === 'double' && <DoubleCounter/>}
        </AppStyles>
    );
}

export default App;
