import { RootState } from "../../app/store"
import { StatusType } from "../../types/types"

export const selectStatusSingleCounter = (state: RootState):StatusType => state.singleCounter.status