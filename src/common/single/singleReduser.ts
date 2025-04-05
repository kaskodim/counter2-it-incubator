import { createAction, createReducer } from "@reduxjs/toolkit"
import { ChangeValuePayload, SingleCounterType, StatusType, ValuesType } from "../../types/types"
import { getIsValuesZero } from "../../utils/getIsValuesZero"
import { getIsError } from "../../utils/getIsError"


export const getValuesFromLocalStorageAC = createAction<{values: ValuesType} >("singleCounter/addValuesFromLocalStorage")
export const onChangeValuesAC = createAction<ChangeValuePayload>("singleCounter/onChangeValues")
export const changeShowCounterAC = createAction<{ flag: boolean }>("singleCounter/changeShowCounter")
export const onClickMemoryClearAC = createAction<{ values: ValuesType, status: StatusType }>("singleCounter/onClickMemoryClear")
export const onClickSetAC = createAction<{ values: ValuesType, showCounter: boolean }>("singleCounter/onClickSetHandler")
export const onChangeStatusAC = createAction<{ status: StatusType }>("singleCounter/onChangeStatus")
export const resetSettingsAC = createAction<{ values: ValuesType, status: StatusType }>("singleCounter/resetSettings")
export const onClickGetButtonAC = createAction<{ value: ValuesType }>("singleCounter/onClickGetButton")


const initialState: SingleCounterType = {
  stateValues: { max: 0, start: 0 },
  localValues: { max: 0, start: 0 },
  status: "setup",
  showCounter: false
}

export const singleReducer = createReducer(initialState, builder => {
  builder
    .addCase(getValuesFromLocalStorageAC, (state, action) => {
      state.localValues = action.payload.values
      state.stateValues = action.payload.values
      state.status = "setup"
    })
    .addCase(onChangeValuesAC, (state, action) => {
      const { field, value } = action.payload
      state.stateValues[field] = value

      const isValueZero = getIsValuesZero(state.stateValues.start, state.stateValues.max)
      const error = getIsError(state.stateValues.start, state.stateValues.max)

      isValueZero ? state.status = "setup" : state.status = (error ? "error" : "ready")
    })
    .addCase(changeShowCounterAC, (state, action) => {
      state.showCounter = action.payload.flag
    })
    .addCase(onClickMemoryClearAC, (state, action) => {
      state.localValues = action.payload.values
      state.stateValues = action.payload.values
      state.status = action.payload.status
    })
    .addCase(onClickSetAC, (state, action) => {
      state.localValues = action.payload.values
      state.showCounter = action.payload.showCounter
    })
    .addCase(onChangeStatusAC, (state, action) => {
      state.status = action.payload.status
    })
    .addCase(resetSettingsAC, (state, action) => {
      state.stateValues = action.payload.values
      state.status = action.payload.status
    })
    .addCase(onClickGetButtonAC, (state, action) => {
      const { max, start } = action.payload.value
      state.stateValues.max = max
      state.stateValues.start = start
      state.status='setup'
    })
})
