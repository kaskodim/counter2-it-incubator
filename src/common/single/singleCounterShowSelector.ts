import { RootState } from "../../app/store"

export const selectShowSingleCounter = (state: RootState):boolean => state.singleCounter.showCounter