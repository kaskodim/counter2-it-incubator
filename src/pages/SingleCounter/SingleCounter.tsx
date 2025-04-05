import React, { useEffect } from "react"
import { Settings } from "./Settigs/Settigs"
import { getLocalStorage } from "../../utils/getLocalStorage"
import { Count } from "./Count/Count"
import { Wrapper } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { getValuesFromLocalStorageAC } from "../../common/single/singleReduser"
import { selectShowSingleCounter } from "../../common/single/singleCounterShowSelector"


export const KEY_SETTINGS_VALUES = "single"

export const SingleCounter = () => {

  const showCounter = useSelector(selectShowSingleCounter)
  const dispatch = useDispatch()

  useEffect(() => {
    const LocalValue = getLocalStorage(KEY_SETTINGS_VALUES)
    if (LocalValue) {
      dispatch(getValuesFromLocalStorageAC({values: LocalValue}))
    }
  }, [dispatch])

  return (
    <Wrapper>
      {showCounter && <Count />}
      {!showCounter && <Settings />}
    </Wrapper>
  )
}

