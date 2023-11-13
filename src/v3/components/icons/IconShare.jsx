import PropTypes from "prop-types";

const IconShare = ({ color = "#222222", width = 24, height = 24 }) => {
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
        id="mask0_2473_21945"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2473_21945)">
        <path
          d="M18.0011 21.75C17.2375 21.75 16.5881 21.4826 16.0529 20.9479C15.5176 20.4132 15.25 19.7639 15.25 19C15.25 18.8751 15.2599 18.7459 15.2798 18.6121C15.2997 18.4784 15.3295 18.3551 15.3692 18.2423L7.97305 13.9115C7.70895 14.1743 7.40831 14.3798 7.07113 14.5279C6.73394 14.6759 6.37689 14.75 5.99997 14.75C5.23609 14.75 4.58679 14.4827 4.05207 13.9482C3.51736 13.4137 3.25 12.7647 3.25 12.0011C3.25 11.2375 3.51736 10.5881 4.05207 10.0529C4.58679 9.51763 5.23609 9.25 5.99997 9.25C6.37689 9.25 6.73394 9.32403 7.07113 9.4721C7.40831 9.62018 7.70895 9.82563 7.97305 10.0885L15.3692 5.75768C15.3295 5.64486 15.2997 5.52157 15.2798 5.38783C15.2599 5.25409 15.25 5.12481 15.25 4.99998C15.25 4.23609 15.5173 3.58679 16.0518 3.05208C16.5863 2.51736 17.2353 2.25 17.9989 2.25C18.7624 2.25 19.4118 2.51725 19.9471 3.05175C20.4823 3.58625 20.75 4.23528 20.75 4.99885C20.75 5.76242 20.4826 6.41182 19.9479 6.94707C19.4132 7.48233 18.7639 7.74995 18 7.74995C17.6231 7.74995 17.266 7.67592 16.9288 7.52785C16.5916 7.37977 16.291 7.17432 16.0269 6.9115L8.63073 11.2423C8.67048 11.3551 8.70028 11.4782 8.72015 11.6115C8.74002 11.7447 8.74995 11.8736 8.74995 11.998C8.74995 12.1224 8.74002 12.2519 8.72015 12.3865C8.70028 12.5211 8.67048 12.6449 8.63073 12.7577L16.0269 17.0885C16.291 16.8256 16.5916 16.6202 16.9288 16.4721C17.266 16.324 17.6231 16.25 18 16.25C18.7639 16.25 19.4132 16.5173 19.9479 17.0518C20.4826 17.5863 20.75 18.2353 20.75 18.9989C20.75 19.7624 20.4827 20.4118 19.9482 20.9471C19.4137 21.4823 18.7647 21.75 18.0011 21.75ZM18 6.24998C18.3474 6.24998 18.6426 6.1285 18.8856 5.88555C19.1285 5.64258 19.25 5.34738 19.25 4.99995C19.25 4.65252 19.1285 4.35732 18.8856 4.11435C18.6426 3.87142 18.3474 3.74995 18 3.74995C17.6525 3.74995 17.3573 3.87143 17.1144 4.11438C16.8714 4.35734 16.75 4.65254 16.75 4.99998C16.75 5.34741 16.8714 5.64261 17.1144 5.88558C17.3573 6.12853 17.6525 6.24998 18 6.24998ZM5.99997 13.25C6.34741 13.25 6.64261 13.1285 6.88558 12.8856C7.12853 12.6426 7.25 12.3474 7.25 12C7.25 11.6525 7.12853 11.3573 6.88558 11.1144C6.64261 10.8714 6.34741 10.75 5.99997 10.75C5.65254 10.75 5.35734 10.8714 5.11438 11.1144C4.87143 11.3573 4.74995 11.6525 4.74995 12C4.74995 12.3474 4.87143 12.6426 5.11438 12.8856C5.35734 13.1285 5.65254 13.25 5.99997 13.25ZM18 20.25C18.3474 20.25 18.6426 20.1285 18.8856 19.8855C19.1285 19.6426 19.25 19.3474 19.25 19C19.25 18.6525 19.1285 18.3573 18.8856 18.1144C18.6426 17.8714 18.3474 17.75 18 17.75C17.6525 17.75 17.3573 17.8714 17.1144 18.1144C16.8714 18.3573 16.75 18.6525 16.75 19C16.75 19.3474 16.8714 19.6426 17.1144 19.8856C17.3573 20.1285 17.6525 20.25 18 20.25Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconShare.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconShare;