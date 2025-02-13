import React from 'react';
import {SingleCounter} from './pages/SingleCounter/SingleCounter';
import {DoubleCounter} from './pages/DoubleCounter/DoubleCounter';
import {AppStyles} from './styles/AppStyles';
import {ViewSelector} from './components/ViewSelector';
import {ViewModeType} from './types/types';

function App() {
    const [viewMode, setViewMode] = React.useState<ViewModeType>('single');

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
