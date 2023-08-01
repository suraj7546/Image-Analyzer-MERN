import React from "react";
import "./safe.css";

// Functional component 'Safe' that displays information about safe categories from the provided data
const Safe = (safe) => {
  safe = safe.safe; // Destructuring the 'safe' prop to access the data

  return (
    <>
      {/* Conditional rendering based on whether 'safe' is defined or not */}
      {safe ? (
        // If 'safe' is available, render the safe box
        <div className="safe-box">
          {/* Map through the 'categories' array inside 'safe.result' */}
          {safe.result.categories.map((tag) => (
            <div className="row">
              {/* Display the category name in English */}
              <div className="name">{tag.name.en}</div>

              {/* Display the confidence score for the category */}
              <div className="score">{tag.confidence}</div>

              {/* Display a meter element representing the confidence score */}
              <div
                className="meter"
                style={{ "--confidence": tag.confidence / 100 }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        // If 'safe' is not available, display "Loading"
        <p>loading</p>
      )}
    </>
  );
};

export default Safe;
