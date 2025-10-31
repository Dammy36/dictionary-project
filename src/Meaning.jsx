function Meaning(props) {
  console.log(props.meanings);
  return (
    <div>
      <h3> {props.meanings.partOfSpeech}</h3>
      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
