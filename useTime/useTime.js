import { useEffect, useRef, useState } from "react";

export const useTime = (arg1, arg2) => {
  let timestamp, timeZone;
  if (typeof arg1 === "string") {
    timeZone = arg1;
    timestamp = arg2;
  } else {
    timestamp = arg1;
    timeZone = arg2;
  }

  // Edit options according to your needs
  //====================================================================
  const options = { hour12: true, hour: "numeric", minute: "numeric" };
  //====================================================================

  const d = timestamp ? new Date(timestamp * 1000) : new Date();
  const dateRef = useRef(d);
  const [currentTime, setCurrentTime] = useState(
    dateRef.current.toLocaleString("en-GB", options),
  );

  useEffect(() => {
    console.log("first");
    if (timestamp) return;

    const interval = setInterval(() => {
      console.log("second");
      dateRef.current = new Date(dateRef.current.getTime() + 1000);

      if (dateRef.current.getSeconds() === 0) {
        const added1Min = dateRef.current.toLocaleString("en-GB", {
          timeZone,
          ...options,
        });
        setCurrentTime(added1Min);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone, timestamp]);

  useEffect(() => {
    dateRef.current = timestamp ? new Date(timestamp * 1000) : new Date();
    setCurrentTime(
      dateRef.current.toLocaleString("en-GB", { timeZone, ...options }),
    );
  }, [timeZone, timestamp]);

  return {
    time: currentTime,
    minute: dateRef.current.getMinutes(),
    hour: dateRef.current.getHours(),
  };
};
