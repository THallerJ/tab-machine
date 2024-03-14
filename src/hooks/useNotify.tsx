import { useState, useCallback } from 'react';

const useNotify = (time?: number) => {
  const [notified, setNotified] = useState(false);

  const notify = useCallback(() => {
    setNotified(true);

    setTimeout(
      () => {
        setNotified(false);
        return null;
      },
      time ? time : 1500
    );
  }, [setNotified, time]);

  const cancel = (): void => {
    setNotified(false);
  };

  return [notified, notify, cancel] as const;
};

export default useNotify;
