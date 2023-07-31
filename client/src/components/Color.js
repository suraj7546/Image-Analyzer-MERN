import React from "react";
import "./color.css";

const Color = (color) => {
  color = color.color;
  // console.log(color);
  return (
    <>
      <div className="box">
        {color ? (
          <div className="color-line-container">
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
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default Color;
