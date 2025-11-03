import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2> {props.result.word}</h2>

          <Phonetic phonetic={props.result.phonetic} />
        </section>

        <section>
          {props.result.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meaning meanings={meanings} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
export default Result;
