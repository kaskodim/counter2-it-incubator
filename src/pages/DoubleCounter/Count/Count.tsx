import React, { useEffect } from "react"
import { Button } from "../../../styles/button"
import { Box, BoxControlUnit, BoxScreen } from "../styles"
import { TitleScreen, ValueScreen } from "./styles"
import { useSelector } from "react-redux"
import { selectValuesDoubleCounter } from "../../../common/double/doubleCounterValuesSelector"
import { selectStatusDoubleCounter } from "../../../common/double/doubleCounterStatusSelector"


export const Count = () => {

  const values = useSelector(selectValuesDoubleCounter)
  const status = useSelector(selectStatusDoubleCounter)

  const [value, setValue] = React.useState<number>(values.start)

  const isIncDisabled = value === values.max || status !== "ready"
  const isResetDisabled = value === values.start || status !== "ready"

  const isShowError = status === "error"
  const isShowMessage = status === "setup"
  const isShowValue = status === "ready"

  const onClickAddValue = () => {
    if (value < values.max) {
      setValue(value + 1)
    }
  }
  const onClickResetValue = () => {
    setValue(values.start)
  }

  useEffect(() => {
    setValue(values.start)
  }, [values])

  return (
    <Box>
      <BoxScreen>
        {isShowError && <TitleScreen isError>Incorrect value!</TitleScreen>}
        {isShowMessage && <TitleScreen>Enter values and press 'set'</TitleScreen>}
        {isShowValue && <ValueScreen isMax={isIncDisabled}>{value}</ValueScreen>}
      </BoxScreen>

      <BoxControlUnit>
        <Button disabled={isIncDisabled}
                onClick={onClickAddValue}>inc
        </Button>
        <Button disabled={isResetDisabled}
                onClick={onClickResetValue}>reset
        </Button>
      </BoxControlUnit>
    </Box>
  )
}



