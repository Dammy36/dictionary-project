import Synonyms from "./Synonyms";

function Meaning(props) {
  console.log(props.meanings);
  return (
    <div>
      <h3> {props.meanings.partOfSpeech}</h3>
      <div>
        <p>{props.meanings.definition}</p>
        <br />
        <em>{props.meanings.example}</em>
        <Synonyms Synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}

export default Meaning;
