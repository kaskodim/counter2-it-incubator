import React, { ChangeEvent } from "react"
import { KEY_SETTINGS_VALUES } from "../DoubleCounter"
import { Button } from "../../../styles/button"
import { Input, WrapperInputs, WrapperLabel } from "../../../styles/inputStyles"
import { Box, BoxControlUnit, BoxScreen } from "../styles"
import { setLocalStorage } from "../../../utils/setLocalStorige"
import { useDispatch, useSelector } from "react-redux"
import { selectValuesDoubleCounter } from "../../../common/double/doubleCounterValuesSelector"
import { selectStatusDoubleCounter } from "../../../common/double/doubleCounterStatusSelector"
import { onChangeStatusAC, onChangeValuesAC, resetSettingsAC } from "../../../common/double/doubleReduser"
import { selectPressResetDoubleCounter } from "../../../common/double/doubleCounterPressResset"


export const Settings = () => {

  const values = useSelector(selectValuesDoubleCounter)
  const status = useSelector(selectStatusDoubleCounter)
  const isDisabledResetSettings = useSelector(selectPressResetDoubleCounter)

  const dispatch = useDispatch()

  const isValuesZero = values.start === 0 && values.max === 0
  const disabledSet = status !== "setup" || isValuesZero

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeValuesAC({ field: "max", value: +e.currentTarget.value }))
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeValuesAC({ field: "start", value: +e.currentTarget.value }))
  }

  const setSettingsHandler = () => {
    setLocalStorage(KEY_SETTINGS_VALUES, values)
    dispatch(onChangeStatusAC({ status: "ready" }))
  }

  const resetSettingsHandler = () => {
    dispatch(resetSettingsAC({ values: { max: 0, start: 0 } }))
    localStorage.removeItem(KEY_SETTINGS_VALUES)
  }

  return (
    <Box>
      <BoxScreen>
        <WrapperInputs>
          <WrapperLabel htmlFor="idMax">
            max value:
            <Input id="idMax"
                   type={"number"}
                   onChange={onChangeMaxValueHandler}
                   status={status}
                   value={String(values.max)} />
          </WrapperLabel>

          <WrapperLabel htmlFor={"idStart"}>
            start value:
            <Input id="idStart"
                   type={"number"}
                   onChange={onChangeStartValueHandler}
                   status={status}
                   value={values.start} />
          </WrapperLabel>
        </WrapperInputs>
      </BoxScreen>

      <BoxControlUnit>
        <Button disabled={isDisabledResetSettings}
                onClick={resetSettingsHandler}>
          reset
        </Button>

        <Button disabled={disabledSet}
                onClick={setSettingsHandler}>
          set
        </Button>
      </BoxControlUnit>
    </Box>
  )
}
