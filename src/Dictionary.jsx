import { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photo from "./Photo";
function Dictionary(props) {
  const [keyWord, setKeyword] = useState(props.defaultKeyWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState(null);

  function getResponse(response) {
    setResult(response.data);
  }

  function imageResponse(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    const apiKey = "ft2ff28777530dba3dddb311o0464bef";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    const imageApiKey = "ft2ff28777530dba3dddb311o0464bef";
    const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${imageApiKey}`;

    axios.get(apiUrl).then(getResponse);
    axios.get(imageApiUrl).then(imageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <h1>Dictionary</h1>
        <section>
          <h2>What are you looking for?</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateKeyword}
              defaultValue={props.defaultKeyWord}
            />
            <div className="hints">
              Suggestion Hints plants, nature sunset...
            </div>
          </form>
        </section>
        <Result result={result} />
        <Photo photo={photo} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
export default Dictionary;
