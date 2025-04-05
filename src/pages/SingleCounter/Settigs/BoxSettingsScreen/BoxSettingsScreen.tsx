import React, { ChangeEvent } from "react"
import { BoxScreen } from "../../styles"
import { Memory } from "../../../../components/Memory/Memory"
import { Input, WrapperInputs, WrapperLabel } from "../../../../styles/inputStyles"
import { onChangeValuesAC } from "../../../../common/single/singleReduser"
import { useDispatch, useSelector } from "react-redux"
import { selectStateValuesSingleCounter } from "../../../../common/single/singleCounterStateValuesSelector"
import { selectStatusSingleCounter } from "../../../../common/single/singleCounterStatusSelector"

export const BoxSettingsScreen = () => {

  const stateValues = useSelector(selectStateValuesSingleCounter)
  const status = useSelector(selectStatusSingleCounter)
  const dispatch = useDispatch()

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeValuesAC({ field: "max", value: +e.currentTarget.value }))
  }

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeValuesAC({ field: "start", value: +e.currentTarget.value }))
  }

  return (
    <BoxScreen>
      <Memory />

      <WrapperInputs>
        <WrapperLabel htmlFor={"idMax"}>
          max value:
          <Input id="idMax"
                 type={"number"}
                 onChange={onChangeMaxHandler}
                 value={String(stateValues.max)}
                 status={status} />
        </WrapperLabel>

        <WrapperLabel htmlFor={"idStart"}> start value:
          <Input id="idStart"
                 type={"number"}
                 onChange={onChangeStartHandler}
                 value={String(stateValues.start)}
                 status={status} />
        </WrapperLabel>
      </WrapperInputs>
    </BoxScreen>
  )
}

