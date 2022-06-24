import { useRef, useEffect } from 'react';

type Handlers = {
  onPointerHold: VoidFunction;
  onPointerDown?: VoidFunction;
  onPointerUp?: VoidFunction;
};

const usePointerHold = () => {
  const timeoutIds = useRef<{ [key: number]: number }>({});

  const cleanUpIDs = (...ids: number[]) =>
    ids.forEach((id) => clearTimeout(id));

  useEffect(() => {
    return () => {
      cleanUpIDs(...Object.values(timeoutIds.current));
    };
  }, []);

  const attachPointerHold = (
    { onPointerHold, onPointerDown, onPointerUp }: Handlers,
    timer = 1600
  ) => {
    const id = Math.random();

    // I know its weird seeing multiple "onPointerDown/onPointerUp"
    return {
      onPointerDown: () => {
        onPointerDown && onPointerDown();
        timeoutIds.current[id] = setTimeout(() => {
          onPointerHold();
        }, timer);
      },
      onPointerUp: () => {
        onPointerUp && onPointerUp();
        cleanUpIDs(timeoutIds.current[id]);
      },
    };
  };

  return { attachPointerHold };
};

export default usePointerHold;
