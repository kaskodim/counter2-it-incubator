import {RootState} from '../../app/store';
import {StatusType} from '../../types/types';

export const selectStatusDoubleCounter = (state: RootState):StatusType => state.doubleCounter.status