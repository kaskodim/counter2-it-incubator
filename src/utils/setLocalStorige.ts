import {ValuesType} from '../types/types';

export function setLocalStorage(key: string, value: string | ValuesType) {
    localStorage.setItem(key, JSON.stringify(value));
}