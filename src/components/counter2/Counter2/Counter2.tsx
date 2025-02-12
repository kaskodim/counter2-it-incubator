import React, {useEffect} from 'react';
import {Settings} from '../Settigs/Settigs';
import {FieldType, StatusType, ValuesType} from '../../../types/types';

const INITIAL_VALUES_STATE: ValuesType = {max: 0, start: 0,}
export const KEY_SETTINGS_VALUES = 'valuesCounter02'


export const Counter2 = () => {

    const [values, setValues] = React.useState<ValuesType>(INITIAL_VALUES_STATE);
    const [status, setStatus] = React.useState<StatusType>('notConfigured');

    console.log(values, {status})

useEffect(()=>{
   const getLocalValues = localStorage.getItem(KEY_SETTINGS_VALUES)
   if(getLocalValues){
       const parseLocalValue = JSON.parse(getLocalValues)
       setValues(parseLocalValue)
   }
},[])


    const onChangeSetValues = (field: FieldType, number: number) => {
        setValues((prev) => ({...prev, [field]: number}))
    }


    return (
        <div>
            <Settings
                onChangeSetValues={onChangeSetValues}
                values={values}
                setStatus={setStatus}
                status={status}

            />
        </div>
    );
};

