export default function Button({ name, variant, onClick }) {
  return (
    <div id="my-btn">
      <button onClick={onClick} className={variant}>
        {name}
      </button>
    </div>
  );
}
