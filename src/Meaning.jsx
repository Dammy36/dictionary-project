import Synonyms from "./Synonyms";

function Meaning(props) {
  console.log(props.meanings);
  return (
    <div>
      <h3> {props.meanings.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Meaning:</strong> {props.meanings.definition}
        </p>
        <br />
        <em>
          <strong>Example:</strong> {props.meanings.example}
        </em>
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}

export default Meaning;
