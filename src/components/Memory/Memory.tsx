import React from "react"
import { GetButton, MemoryScreen } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { selectLocalStorageValuesSingleCounter } from "../../common/single/singleCounterLocalStorageValuesSelector"
import { onClickGetButtonAC } from "../../common/single/singleReduser"
import { selectShowSingleCounter } from "../../common/single/singleCounterShowSelector"
import { selectStateValuesSingleCounter } from "../../common/single/singleCounterStateValuesSelector"


export const Memory = () => {

  const stateValues = useSelector(selectStateValuesSingleCounter)
  const localStorageValues = useSelector(selectLocalStorageValuesSingleCounter)
  const showCounter = useSelector(selectShowSingleCounter)
  const dispatch = useDispatch()

  const isDisabledGetButton = JSON.stringify(stateValues) === JSON.stringify(localStorageValues)

  const onClickGetButtonHandler = () => {
    dispatch(onClickGetButtonAC({ value: localStorageValues }))
  }

  return (
    <MemoryScreen>
      {!showCounter && <GetButton onClick={onClickGetButtonHandler}
                                   disabled={isDisabledGetButton}>
          GET
        </GetButton>
      }
      <div>
        memory
        max: {localStorageValues.max} start: {localStorageValues.start}
      </div>
    </MemoryScreen>
  )
}
