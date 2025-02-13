
export function getLocalStorage(key: string): any {
    const getLocalValues = localStorage.getItem(key)
    if (getLocalValues) {
        return JSON.parse(getLocalValues)
    }
}