import React from "react"
import { BoxScreen } from "../../styles"
import { Memory } from "../../../../components/Memory/Memory"
import { ValueScreen } from "../styles"


type BoxScreenCountPropsType = {
  value: number
  isDisabledInc: boolean
}

export const BoxScreenScreen = ({ value, isDisabledInc }: BoxScreenCountPropsType) => {
  return (
    <BoxScreen>
      <Memory />
      <ValueScreen isMax={isDisabledInc}>{value}</ValueScreen>
    </BoxScreen>
  )
}

