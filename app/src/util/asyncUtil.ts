
export const asyncSleep = (sleepTime: number): Promise<void> => (
  new Promise((resolve) => setTimeout(resolve, sleepTime))
);
