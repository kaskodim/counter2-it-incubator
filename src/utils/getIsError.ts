export const getIsError = (start: number, max: number): boolean => {
    const isNegativeValues = start < 0 || max < 0;
    const isStartHigherMaximum = start >= max &&
        (start > 0 || max > 0);
    return isNegativeValues || isStartHigherMaximum;
}