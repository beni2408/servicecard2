export default function TopContent({ convertEpochToTime, courseDetails }) {
  return (
    <div className="flex-row">
      <div>{new Date().toLocaleString().slice(0, 8)}</div>
      <div>{`${convertEpochToTime(
        courseDetails.startTime
      )} to ${convertEpochToTime(courseDetails.endTime)}`}</div>
    </div>
  );
}
