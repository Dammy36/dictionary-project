import { useState } from "react";
import "./dictionary.css";

function Dictionary() {
  const [keyWord, setKeyword] = useState("");

  function submit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <h1 className="dictionary">Hello</h1>
      <form onSubmit={submit}>
        <input type="search" onChange={updateKeyword} />
      </form>
    </div>
  );
}
export default Dictionary;
