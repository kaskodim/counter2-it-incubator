import React from 'react';
import {SingleCounter} from './pages/SingleCounter/SingleCounter';
import {DoubleCounter} from './pages/DoubleCounter/DoubleCounter';
import {AppStyles, ViewModeTitle} from './styles/AppStyles';
import {Button} from './styles/Button';
import {Wrapper} from './styles/Counter';

type viewModeType = 'single' | 'double';

function App() {

    const [viewMode, setViewMode] = React.useState<viewModeType>('single');
    const onClickViewModeHandler = () => {
        viewMode === 'single' ? setViewMode('double') : setViewMode('single')
    }

    return (
        <AppStyles>
            {viewMode === 'single' && <SingleCounter/>}
            {viewMode === 'double' && <DoubleCounter/>}

            <Wrapper>
                <ViewModeTitle>{viewMode}</ViewModeTitle>
                <Button onClick={onClickViewModeHandler}>
                    change it
                </Button>
            </Wrapper>
        </AppStyles>
    );
}

export default App;
