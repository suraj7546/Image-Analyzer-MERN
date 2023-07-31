import "./about.css";

const Abouts = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="object-box">
          {data.result.tags.map((tag) => (
            <div className="row">
              <div className="name">{tag.tag.en}</div>
              <div className="score">{Math.round(tag.confidence)}%</div>
              <div
                className="meter"
                style={{ "--confidence": tag.confidence / 100 }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data</p>
      )}
      ;
    </>
  );
};

export default Abouts;
