import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

export const useViewModeSelector = useSelector.withTypes<RootState>()