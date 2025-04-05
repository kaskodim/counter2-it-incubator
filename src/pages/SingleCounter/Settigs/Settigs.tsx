import React from "react"
import { Box } from "../styles"
import { BoxSettingsScreen } from "./BoxSettingsScreen/BoxSettingsScreen"
import { BoxControlUnitScreen } from "./BoxControlUnitScreen/BoxControlUnitScreen"


export const Settings = () => {
  return (
    <Box>
      <BoxSettingsScreen />
      <BoxControlUnitScreen />
    </Box>
  )
}



