import { useState } from "react";
import Button from "./Button";

export default function MiddleContent({
  courseDetails,
  setTotalIntrested,
  totalIntrested,
}) {
  const [intrested, setIntrested] = useState(true);

  function handleIntrested() {
    setIntrested(!intrested);
    setTotalIntrested(totalIntrested + 1);
  }

  function handleNotIntrested() {
    setIntrested(!intrested);
    setTotalIntrested(totalIntrested - 1);
  }

  return (
    <div className="card-content">
      <h3>{courseDetails.name}</h3>
      <div style={{ color: "#5e7087" }}>{courseDetails.course_name}</div>
      <div style={{ color: "#5e7087" }}>{courseDetails.language}</div>
      {/* conditional rendering  */}
      {intrested ? (
        <Button
          name={"Intrested"}
          variant={"btn btn-accent"}
          onClick={handleIntrested}
        />
      ) : (
        <Button
          name={"Not Intrested"}
          variant={"btn btn-error"}
          onClick={handleNotIntrested}
        />
      )}
    </div>
  );
}
