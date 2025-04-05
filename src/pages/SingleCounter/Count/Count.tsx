import React from "react"
import { Box } from "../styles"
import { useSelector } from "react-redux"
import { selectStateValuesSingleCounter } from "../../../common/single/singleCounterStateValuesSelector"
import { BoxControlUnitScreen } from "./BoxControlUnitScreen/BoxControlUnitScreen"
import { BoxScreenScreen } from "./BoxScreenScreen/BoxScreenCount"


export const Count = () => {

  const stateValues = useSelector(selectStateValuesSingleCounter)
  const [value, setValue] = React.useState<number>(stateValues.start)
  const isDisabledInc = value === stateValues.max

  return (
    <Box>
      <BoxScreenScreen value={value}
                       isDisabledInc={isDisabledInc} />

      <BoxControlUnitScreen value={value}
                            isDisabledInc={isDisabledInc}
                            setValue={setValue} />
    </Box>
  )
}
