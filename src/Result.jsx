import Meaning from "./Meaning";
function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2> {props.result.word}</h2>
        {props.result.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default Result;
