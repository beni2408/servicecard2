export default function Bottomcard({ getType, courseDetails }) {
  return (
    <div className="flex-row">
      <div>{getType(courseDetails.type)} </div>
      <div>{courseDetails.students}</div>
    </div>
  );
}
