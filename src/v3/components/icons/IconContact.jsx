import PropTypes from "prop-types";

const IconContact = ({ color = "#222222", width = 24, height = 24 }) => {
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
        id="mask0_2597_17441"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2597_17441)">
        <path
          d="M4.25 22.1922V20.6923H19.75V22.1922H4.25ZM4.25 3.30771V1.80774H19.75V3.30771H4.25ZM12 13.5C12.7628 13.5 13.4118 13.2324 13.9471 12.6971C14.4823 12.1619 14.75 11.5129 14.75 10.75C14.75 9.98722 14.4823 9.33819 13.9471 8.80294C13.4118 8.26769 12.7628 8.00006 12 8.00006C11.2372 8.00006 10.5881 8.26769 10.0529 8.80294C9.51763 9.33819 9.25 9.98722 9.25 10.75C9.25 11.5129 9.51763 12.1619 10.0529 12.6971C10.5881 13.2324 11.2372 13.5 12 13.5ZM4.3077 19.5C3.80257 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30771C2.5 5.80258 2.675 5.37501 3.025 5.02501C3.375 4.67501 3.80257 4.50001 4.3077 4.50001H19.6923C20.1974 4.50001 20.625 4.67501 20.975 5.02501C21.325 5.37501 21.5 5.80258 21.5 6.30771V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.3077ZM6.40388 18C7.15388 17.1949 8.00131 16.5769 8.94618 16.1462C9.89103 15.7154 10.909 15.5 12 15.5C13.091 15.5 14.1089 15.7154 15.0538 16.1462C15.9986 16.5769 16.8461 17.1949 17.5961 18H19.6923C19.7692 18 19.8397 17.9679 19.9038 17.9038C19.9679 17.8397 20 17.7692 20 17.6923V6.30771C20 6.23078 19.9679 6.16026 19.9038 6.09614C19.8397 6.03204 19.7692 5.99999 19.6923 5.99999H4.3077C4.23077 5.99999 4.16024 6.03204 4.09613 6.09614C4.03202 6.16026 3.99998 6.23078 3.99998 6.30771V17.6923C3.99998 17.7692 4.03202 17.8397 4.09613 17.9038C4.16024 17.9679 4.23077 18 4.3077 18H6.40388ZM8.69998 18H15.3C14.8166 17.6667 14.2958 17.4167 13.7375 17.25C13.1791 17.0833 12.6 17 12 17C11.4 17 10.8208 17.0833 10.2625 17.25C9.70414 17.4167 9.18331 17.6667 8.69998 18ZM12 12.0001C11.6525 12.0001 11.3573 11.8786 11.1144 11.6356C10.8714 11.3927 10.75 11.0975 10.75 10.75C10.75 10.4026 10.8714 10.1074 11.1144 9.86446C11.3573 9.6215 11.6525 9.50001 12 9.50001C12.3474 9.50001 12.6426 9.6215 12.8856 9.86446C13.1285 10.1074 13.25 10.4026 13.25 10.75C13.25 11.0975 13.1285 11.3927 12.8856 11.6356C12.6426 11.8786 12.3474 12.0001 12 12.0001Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconContact.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconContact;
