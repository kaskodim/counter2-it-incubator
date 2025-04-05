import {RootState} from '../../app/store';
import {ValuesType} from '../../types/types';

export const selectLocalStorageValuesSingleCounter = (state: RootState):ValuesType => state.singleCounter.localValues