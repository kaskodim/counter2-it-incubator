import React, {useEffect} from 'react';
import {SingleCounter} from './pages/SingleCounter/SingleCounter';
import {AppStyles} from './styles/appStyles';
import {ViewSelector} from './components/ViewSelector/ViewSelector';
import {ViewModeType} from './types/types';
import {DoubleCounter} from './pages/DoubleCounter/DoubleCounter';
import {getLocalStorage} from './utils/getLocalStorage';

export const VIEW_MODE_LOCAL_STORAGE = 'viewMode'

function App() {

    const [viewMode, setViewMode] = React.useState<ViewModeType>('single');

    useEffect(() => {
        const getLocalViewMode = getLocalStorage(VIEW_MODE_LOCAL_STORAGE)
        if (getLocalViewMode) {
            setViewMode(getLocalViewMode)
        }
    }, [])

    return (
        <AppStyles>
            {viewMode === 'single' && <SingleCounter/>}
            {viewMode === 'double' && <DoubleCounter/>}

            <ViewSelector viewMode={viewMode}
                          setViewMode={setViewMode}/>
        </AppStyles>
    );
}

export default App;
