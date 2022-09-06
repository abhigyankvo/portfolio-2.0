export const useDebounce = (func: () => void, timerRef: any, delay = 100) => {
  return () => {
    timerRef.current != null && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(func, delay);
  };
};
