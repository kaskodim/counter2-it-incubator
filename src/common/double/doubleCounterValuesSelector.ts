import {RootState} from '../../app/store';
import {ValuesType} from '../../types/types';

export const selectValuesDoubleCounter = (state: RootState):ValuesType => state.doubleCounter.values