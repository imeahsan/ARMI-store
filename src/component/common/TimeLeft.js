import useUtilsFunction from "@hooks/useUtilsFunction";
import { useState } from "react";
const calculateTimeRemaining = (endTime) => {
  const currentTime = new Date();
  const timeDiff = endTime - currentTime;
  // console.log(timeDiff);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return {
    ended: timeDiff < 0,
    days,
    hours,
    minutes,
    seconds,
  };
};

const TimeLeft = ({ startTime, endTime, time, product, slug, modal }) => {
  const { getNumber } = useUtilsFunction();
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(new Date(endTime))
  );

  return (
    <>
      {timeRemaining.ended && (
        <span
          className={
            modal
              ? "absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-4 top-4"
              : slug
              ? "text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4"
              : "absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-0 top-0"
          }
        >
          Ended
        </span>
      )}
      {!timeRemaining.ended && (
        <span
          className={
            modal
              ? "absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-4 top-4"
              : slug
              ? "text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4"
              : "absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-0 top-0"
          }
        >
          Ends in:{" "}
          {timeRemaining.days > 0
            ? `${timeRemaining.days} days`
            : timeRemaining.hours > 0
            ? `${timeRemaining.hours} hours`
            : `${timeRemaining.minutes} mins`}
        </span>
      )}
    </>
  );
};

export default TimeLeft;
