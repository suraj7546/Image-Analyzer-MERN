import React from "react";
import "./color.css";

// Functional component 'Color' that displays dominant colors extracted from an image
const Color = (color) => {
  color = color.color; // Destructure the 'color' prop to access the 'color' object

  return (
    <>
      {/* Container div with class 'box' */}
      <div className="box">
        {/* Title for the color display */}
        <div className="domain-title">Dominant Colors</div>

        {/* Conditional rendering based on whether 'color' is available or not */}
        {color ? (
          // If 'color' is available, render the color display
          <div className="color-line-container">
            {/* Map through the 'background_colors' array inside 'color.result.colors' */}
            {color.result.colors.background_colors.map((tag) => (
              <div
                className="color-element"
                style={{
                  backgroundColor: `${tag.closest_palette_color_html_code}`,
                  width: `${tag.percent}%`,
                }}
                title={`${tag.closest_palette_color} - Confidence: ${tag.percent}%`}
              />
            ))}

            {/* Map through the 'foreground_colors' array inside 'color.result.colors' */}
            {color.result.colors.foreground_colors.map((tag) => (
              <div
                className="color-element"
                style={{
                  backgroundColor: `${tag.closest_palette_color_html_code}`,
                  width: `${tag.percent}%`,
                }}
                title={`${tag.closest_palette_color} - Confidence: ${tag.percent}%`}
              />
            ))}
          </div>
        ) : (
          // If 'color' is not available, display "Loading data..."
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default Color;
