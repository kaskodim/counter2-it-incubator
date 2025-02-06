import React from 'react';
import {Counter} from './components/Сounter/Counter';

function App() {

    const getLocalValue = localStorage.getItem('values');
    const localValue = getLocalValue !== null ? JSON.parse(getLocalValue) : {};

    return (
        <div className="App">
            <Counter localValue={localValue}
            />
        </div>
    );
}

export default App;
