import React, {useEffect} from 'react';
import {SingleCounter} from '../pages/SingleCounter/SingleCounter';
import {AppStyles} from '../styles/appStyles';
import {ViewSelector} from '../components/ViewSelector/ViewSelector';
import {DoubleCounter} from '../pages/DoubleCounter/DoubleCounter';
import {getLocalStorage} from '../utils/getLocalStorage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {changeViewModeAC} from './reducer';
import {ViewModeType} from '../types/types';

export const VIEW_MODE_LOCAL_STORAGE = 'viewMode'

function App() {

    const viewMode = useSelector((state: RootState) => state.app.viewMode);
    const dispatch = useDispatch();

    useEffect(() => {
        const getLocalViewMode = getLocalStorage(VIEW_MODE_LOCAL_STORAGE)
        if (getLocalViewMode) {
            dispatch(changeViewModeAC({ viewMode: getLocalViewMode as ViewModeType }));
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
