import { useState } from "react";
import "./dictionary.css";
import axios from "axios";

function Dictionary() {
  const [keyWord, setKeyword] = useState("");

  function submit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
    function getResponse(response) {
      console.log(response.data);
    }
    const apiKey = "ft2ff28777530dba3dddb311o0464bef";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(getResponse);
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
