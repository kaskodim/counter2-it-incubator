import {RootState} from '../../app/store';
import {ValuesType} from '../../types/types';

export const selectStateValuesSingleCounter = (state: RootState):ValuesType => state.singleCounter.stateValues