import React from "react";
import PropTypes from 'prop-types';

const ButtonCircular = ({ title,marginLeft, borderRadius,position, backgroundColor, color, height, width, marginTop = 0, float, marginRight, fontSize, onClick}) =>(
  <>
    <button
      style={{
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        width: width,
        marginTop: marginTop,
        border: 'none',
        fontSize: fontSize,
        float : float,
        marginRight : marginRight,
        position :position,
        marginLeft : marginLeft
      }}
      onClick={onClick}
    >
      {title}
    </button>
  </>
);

ButtonCircular.propTypes = {
    onClick: PropTypes.func,
  };
  
  ButtonCircular.defaultProps = {
    onClick: null,
  };
  

export default ButtonCircular;