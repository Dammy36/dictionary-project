import { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Result from "./Result";
function Dictionary() {
  const [keyWord, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  function submit(event) {
    event.preventDefault();

    function getResponse(response) {
      console.log(response.data);
      setResult(response.data);
    }

    const apiKey = "ft2ff28777530dba3dddb311o0464bef";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(getResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <section>
      <div>
        <h1 className="dictionary">Hello</h1>
        <form onSubmit={submit}>
          <input type="search" onChange={updateKeyword} />
        </form>
        <Result result={result} />
      </div>
    </section>
  );
}
export default Dictionary;
