import {RootState} from '../../app/store';

export const selectPressResetDoubleCounter = (state: RootState): boolean => state.doubleCounter.isDisabledResetSettings