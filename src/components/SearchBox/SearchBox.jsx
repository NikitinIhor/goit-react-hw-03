import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <p className={css.text}>Find contacs by name</p>
      <input
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input}
        type="text"
      />
    </>
  );
}
