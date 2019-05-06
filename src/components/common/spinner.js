import React from "react";
import PropTypes from "prop-types";
// import classnames from "classnames";

const LoadingImage = ({ src, def_style }) => {
  return (
    <div>
      <img
        style={{
          width: "200px",
          margin: "auto",
          display: "block"
        }}
        src={src}
        alt="Loading..."
      />
    </div>
  );
};

LoadingImage.propTypes = {
  src: PropTypes.string.isRequired,
  def_style: PropTypes.string
};

export default LoadingImage;
