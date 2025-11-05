import "./photo.css";
function Photo(props) {
  console.log(props.photo);
  if (props.photo) {
    return (
      <section className="Photo">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt="photos"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
export default Photo;
