/* eslint-disable react/prop-types */
import "./styles/Header.css";

export default function Header({ children }) {
  return <header>{children}</header>;
}

export function SearchForm({
  inputText,
  onInputText,
  inputCheckbox,
  onInputCheckbox,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="search"
        value={inputText}
        onInput={(e) => onInputText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          name="checkbox"
          checked={inputCheckbox}
          onChange={(e) => onInputCheckbox(e.target.checked)}
        /> Only show product in stock
      </label>
    </form>
  );
}
