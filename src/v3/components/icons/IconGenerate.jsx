import PropTypes from "prop-types";

const IconGenerate = ({ color = "#222222", width = 24, height = 24 }) => {
  width = width.toString();
  height = height.toString();

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_3204_169119"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3204_169119)">
        <path
          d="M10.5499 18.2L15.7249 12H11.7249L12.4499 6.32501L7.8249 13H11.2999L10.5499 18.2ZM8.57688 21.4423L9.57688 14.5H4.9519L13.1922 2.60583H14.4229L13.4326 10.5H18.9325L9.80758 21.4423H8.57688Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconGenerate.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconGenerate;
