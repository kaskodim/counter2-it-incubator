import React, { useEffect } from "react"
import { Count } from "./Count/Count"
import { Settings } from "./Setting/Settings"
import { Wrapper } from "./styles"
import { getLocalStorage } from "../../utils/getLocalStorage"
import { useDispatch } from "react-redux"
import { addValuesFromLocalStorageAC } from "../../common/double/doubleReduser"

export const KEY_SETTINGS_VALUES = 'double';

export const DoubleCounter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getLocalValues = getLocalStorage(KEY_SETTINGS_VALUES)
        if (getLocalValues) {
            dispatch(addValuesFromLocalStorageAC(getLocalValues))
        }
    }, [dispatch]);


    return (
        <Wrapper>
            <Settings/>
            <Count />
        </Wrapper>
    );
};