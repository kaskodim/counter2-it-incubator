import {RootState} from '../../app/store';
import {ViewModeType} from '../../types/types';

export const selectViewMode = (state: RootState): ViewModeType => state.viewMode.viewMode