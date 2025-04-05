import { createAction, createReducer } from "@reduxjs/toolkit"
import { ChangeValuePayload, DoubleCounterType, StatusType, ValuesType } from "../../types/types"
import { getIsError } from "../../utils/getIsError"

export const addValuesFromLocalStorageAC = createAction<ValuesType>("doubleCounter/addValuesFromLocalStorage")
export const onChangeValuesAC = createAction<ChangeValuePayload>("doubleCounter/onChangeValues")
export const onChangeStatusAC = createAction<{ status: StatusType }>("doubleCounter/onChangeStatus")
export const resetSettingsAC = createAction<{ values: ValuesType }>("doubleCounter/resetSettings")

const initialState: DoubleCounterType = {
  values: { max: 0, start: 0 },
  status: "setup",
  isDisabledResetSettings: true
}

export const doubleCounterReducer = createReducer(initialState, builder => {
  builder
    .addCase(addValuesFromLocalStorageAC, (state, action) => {
      state.values.start = action.payload.start
      state.values.max = action.payload.max
    })
    .addCase(onChangeValuesAC, (state, action) => {
      const { field, value } = action.payload
      state.values[field] = value


      state.isDisabledResetSettings = false


      const isError = getIsError(state.values.start, state.values.max)
      state.status = isError ? "error" : "setup"
    })
    .addCase(onChangeStatusAC, (state, action) => {
      state.status = action.payload.status
    })
    .addCase(resetSettingsAC, (state, action) => {
      state.values = action.payload.values
      state.isDisabledResetSettings = true
      state.status = "setup"
    })
})
