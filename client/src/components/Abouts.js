import "./about.css";

// Functional component 'Abouts' that displays information about objects/tags from the provided data
const Abouts = ({ data }) => {
  return (
    <>
      {/* Conditional rendering based on whether 'data' is defined or not */}
      {data ? (
        <div className="object-box">
          {/* Map through the 'tags' array inside 'data.result' */}
          {data.result.tags.map((tag) => (
            <div className="row">
              <div className="name">{tag.tag.en}</div>

              {/* Display the confidence score rounded to the nearest percentage */}
              <div className="score">{Math.round(tag.confidence)}%</div>

              {/* Display a meter element representing the confidence score */}
              <div
                className="meter"
                style={{ "--confidence": tag.confidence / 100 }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        // If 'data' is not available, display "Loading data"
        <p>Loading data</p>
      )}
      ;
    </>
  );
};

export default Abouts;
