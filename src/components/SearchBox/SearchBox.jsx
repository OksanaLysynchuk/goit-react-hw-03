import CSS from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={CSS.container}>
      <p className={CSS.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={CSS.input}
      />
    </div>
  );
}
