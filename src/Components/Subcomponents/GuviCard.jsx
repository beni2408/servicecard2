import { useEffect } from "react";
import Bottomcard from "./Bottomcard";
import MiddleContent from "./MiddleContent";
import TopContent from "./TopContent";

export default function GuviCard({
  courseDetails,
  setTotalIntrested,
  totalIntrested,
}) {
  function convertEpochToTime(epoch) {
    let milliseconds = epoch * 1000;
    let newDate = new Date(milliseconds);
    return newDate.toLocaleTimeString().slice(0, 5);
  }
  function getType(type) {
    if (type == "WE") {
      return "Week End";
    } else if (type == "WD") {
      return "Weed Day";
    } else {
      return "NIL";
    }
  }

  return (
    <div className="guvi-card">
      <TopContent
        courseDetails={courseDetails}
        convertEpochToTime={convertEpochToTime}
      />
      <MiddleContent
        courseDetails={courseDetails}
        setTotalIntrested={setTotalIntrested}
        totalIntrested={totalIntrested}
      />
      <Bottomcard courseDetails={courseDetails} getType={getType} />
    </div>
  );
}
