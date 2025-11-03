import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3> {props.meanings.partOfSpeech}</h3>
      <div className="definition">Meaning: {props.meanings.definition}</div>
      <div className="example">
        Example: {props.meanings.example}
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}

export default Meaning;
