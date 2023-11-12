import PropTypes from "prop-types";

const IconRegenerate = ({ color = "#222222", width = 24, height = 24 }) => {
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
        id="mask0_3204_169118"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3204_169118)">
        <path
          d="M11.9999 22.4999C10.1294 22.4999 8.40828 22.0441 6.83647 21.1326C5.26469 20.221 3.98585 18.9403 2.99995 17.2902V20.4999H1.5V14.8076H7.18265V16.3076H4.17492C4.98646 17.7627 6.08325 18.9086 7.4653 19.7451C8.84737 20.5817 10.3589 20.9999 11.9999 20.9999C13.9487 20.9999 15.707 20.4291 17.275 19.2874C18.8429 18.1458 19.9307 16.6474 20.5384 14.7922L22.0076 15.1172C21.3217 17.3262 20.0589 19.1089 18.2192 20.4653C16.3794 21.8217 14.3063 22.4999 11.9999 22.4999ZM1.55 10.9999C1.67307 9.92174 1.9237 8.91982 2.3019 7.99419C2.6801 7.06856 3.21664 6.17561 3.91153 5.31534L4.99033 6.37494C4.45699 7.06469 4.03328 7.77943 3.71918 8.51916C3.40508 9.25891 3.18712 10.0858 3.06533 10.9999H1.55ZM6.39033 4.98456L5.33075 3.90574C6.17562 3.22369 7.07593 2.68459 8.0317 2.28844C8.98747 1.89229 9.97688 1.65255 10.9999 1.56921V3.06916C10.1692 3.1525 9.36566 3.35923 8.58938 3.68936C7.81309 4.0195 7.08008 4.45123 6.39033 4.98456ZM17.6057 4.98456C16.9609 4.46405 16.2349 4.03391 15.4278 3.69416C14.6208 3.35443 13.8115 3.1461 12.9999 3.06916V1.56921C14.0333 1.6628 15.0304 1.90671 15.9913 2.30094C16.9522 2.69517 17.8467 3.23331 18.6749 3.91534L17.6057 4.98456ZM20.9307 10.9999C20.8346 10.1115 20.6214 9.28295 20.2913 8.51436C19.9612 7.74576 19.5294 7.03583 18.9961 6.38456L20.0653 5.31534C20.7538 6.13072 21.2951 7.01886 21.6894 7.97976C22.0836 8.94065 22.3307 9.94737 22.4307 10.9999H20.9307Z"
          fill={color}
        />
        <path
          d="M15.3461 10.75L11.65 17.9614V13.2499H8.6731L12.5 6V10.75H15.3461Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconRegenerate.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconRegenerate;
