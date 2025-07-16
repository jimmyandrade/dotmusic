'use client';

import { useEffect, useState } from 'react';

export const useCountdown = (value: string) => {
  const zeroValue = 0;

  const defaultTimeLeft = {
    days: zeroValue,
    hours: zeroValue,
    minutes: zeroValue,
    seconds: zeroValue,
  };

  const calculateTimeLeft = () => {
    const dateValue = new Date(value);

    const difference = dateValue.getTime() - Date.now();
    const timeLeft = { ...defaultTimeLeft };

    if (difference > zeroValue) {
      const milliseconds = 1000;
      const seconds = 60;
      const minutes = 60;
      const hours = 24;

      timeLeft.seconds = Math.floor((difference / milliseconds) % seconds);
      timeLeft.minutes = Math.floor(
        (difference / milliseconds / seconds) % minutes,
      );
      timeLeft.hours = Math.floor(
        (difference / (milliseconds * seconds * minutes)) % hours,
      );
      timeLeft.days = Math.floor(
        difference / (milliseconds * seconds * minutes * hours),
      );
    }
    return timeLeft;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(defaultTimeLeft);

  useEffect(() => {
    const timeout = 1000;
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setIsLoading(false);
    }, timeout);
    return () => clearTimeout(timer);
  });

  return { isLoading, timeLeft };
};
