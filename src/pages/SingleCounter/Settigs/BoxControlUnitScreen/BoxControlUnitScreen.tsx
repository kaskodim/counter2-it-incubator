import React from "react"
import { BoxControlUnit } from "../../styles"
import { Button } from "../../../../styles/button"
import { onClickMemoryClearAC, onClickSetAC, resetSettingsAC } from "../../../../common/single/singleReduser"
import { KEY_SETTINGS_VALUES } from "../../SingleCounter"
import { setLocalStorage } from "../../../../utils/setLocalStorige"
import { getLocalStorage } from "../../../../utils/getLocalStorage"
import { useDispatch, useSelector } from "react-redux"
import { selectStateValuesSingleCounter } from "../../../../common/single/singleCounterStateValuesSelector"
import { selectStatusSingleCounter } from "../../../../common/single/singleCounterStatusSelector"
import { ValuesType } from "../../../../types/types"

const INITIAL_LOCAL_STATE: ValuesType = { max: 0, start: 0 }

export const BoxControlUnitScreen = () => {

  const stateValues = useSelector(selectStateValuesSingleCounter)
  const status = useSelector(selectStatusSingleCounter)
  const dispatch = useDispatch()

  const notLocalStorage = !localStorage.getItem(KEY_SETTINGS_VALUES)
  const isValuesAreZero = stateValues.start === 0 && stateValues.max === 0
  const isDisabledReset = isValuesAreZero && notLocalStorage
  const isDisabledSet = status === "error" || isValuesAreZero

  const onClickResetHandler = () => {
    dispatch(resetSettingsAC({ values: INITIAL_LOCAL_STATE, status: "setup" }))
  }

  const onClickMemoryClearHandler = () => {
    localStorage.removeItem(KEY_SETTINGS_VALUES)
    dispatch(onClickMemoryClearAC({ values: INITIAL_LOCAL_STATE, status: "setup" }))
  }

  const onClickSetHandler = () => {
    setLocalStorage(KEY_SETTINGS_VALUES, stateValues)
    const LocalValue = getLocalStorage(KEY_SETTINGS_VALUES)
    if (LocalValue) {
      dispatch(onClickSetAC({ values: LocalValue, showCounter: true }))
    }
  }

  return (
    <BoxControlUnit>
      <Button onClick={onClickResetHandler}
              disabled={isDisabledReset}>
        reset
      </Button>

      <Button onClick={onClickMemoryClearHandler}
              disabled={notLocalStorage}>
        clear
      </Button>

      <Button onClick={onClickSetHandler}
              disabled={isDisabledSet}>
        set
      </Button>
    </BoxControlUnit>
  )
}

