import React from "react"
import { BoxControlUnit } from "../../styles"
import { Button } from "../../../../styles/button"
import { changeShowCounterAC } from "../../../../common/single/singleReduser"
import { useDispatch, useSelector } from "react-redux"
import { selectStateValuesSingleCounter } from "../../../../common/single/singleCounterStateValuesSelector"

type BoxControlUnitCountPropsType = {
  value: number
  isDisabledInc: boolean
  setValue: (value: number) => void
}

export const BoxControlUnitScreen = (
  { value, isDisabledInc, setValue }: BoxControlUnitCountPropsType) => {

  const stateValues = useSelector(selectStateValuesSingleCounter)
  const dispatch = useDispatch()
  const isResetDisabled = value === stateValues.start

  const onClickIncHandler = () => {
    if (value < stateValues.max) {
      setValue(value + 1)
    }
  }
  const onClickResetHandler = () => {
    setValue(stateValues.start)
  }
  const onClickSetHandler = () => {
    dispatch(changeShowCounterAC({ flag: false }))
  }

  return (
    <BoxControlUnit>
      <Button onClick={onClickIncHandler}
              disabled={isDisabledInc}>
        inc
      </Button>

      <Button onClick={onClickResetHandler}
              disabled={isResetDisabled}>
        reset
      </Button>

      <Button onClick={onClickSetHandler}>
        set
      </Button>
    </BoxControlUnit>
  )
}

