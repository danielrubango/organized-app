import PropTypes from "prop-types";

const IconWeek = ({ color = "#222222", width = 24, height = 24 }) => {
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
        id="mask0_2513_2501"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2513_2501)">
        <path
          d="M7.99998 13.9423C7.75511 13.9423 7.54646 13.8561 7.37403 13.6836C7.20159 13.5112 7.11538 13.3026 7.11538 13.0577C7.11538 12.8128 7.20159 12.6042 7.37403 12.4317C7.54646 12.2593 7.75511 12.1731 7.99998 12.1731C8.24484 12.1731 8.45349 12.2593 8.62593 12.4317C8.79836 12.6042 8.88458 12.8128 8.88458 13.0577C8.88458 13.3026 8.79836 13.5112 8.62593 13.6836C8.45349 13.8561 8.24484 13.9423 7.99998 13.9423ZM12 13.9423C11.7551 13.9423 11.5465 13.8561 11.374 13.6836C11.2016 13.5112 11.1154 13.3026 11.1154 13.0577C11.1154 12.8128 11.2016 12.6042 11.374 12.4317C11.5465 12.2593 11.7551 12.1731 12 12.1731C12.2448 12.1731 12.4535 12.2593 12.6259 12.4317C12.7984 12.6042 12.8846 12.8128 12.8846 13.0577C12.8846 13.3026 12.7984 13.5112 12.6259 13.6836C12.4535 13.8561 12.2448 13.9423 12 13.9423ZM16 13.9423C15.7551 13.9423 15.5465 13.8561 15.374 13.6836C15.2016 13.5112 15.1154 13.3026 15.1154 13.0577C15.1154 12.8128 15.2016 12.6042 15.374 12.4317C15.5465 12.2593 15.7551 12.1731 16 12.1731C16.2448 12.1731 16.4535 12.2593 16.6259 12.4317C16.7984 12.6042 16.8846 12.8128 16.8846 13.0577C16.8846 13.3026 16.7984 13.5112 16.6259 13.6836C16.4535 13.8561 16.2448 13.9423 16 13.9423ZM5.3077 21.5C4.80257 21.5 4.375 21.325 4.025 20.975C3.675 20.625 3.5 20.1974 3.5 19.6923V6.30772C3.5 5.80259 3.675 5.37502 4.025 5.02502C4.375 4.67502 4.80257 4.50002 5.3077 4.50002H6.69233V2.38464H8.23075V4.50002H15.8077V2.38464H17.3076V4.50002H18.6923C19.1974 4.50002 19.625 4.67502 19.975 5.02502C20.325 5.37502 20.5 5.80259 20.5 6.30772V19.6923C20.5 20.1974 20.325 20.625 19.975 20.975C19.625 21.325 19.1974 21.5 18.6923 21.5H5.3077ZM5.3077 20H18.6923C18.7692 20 18.8397 19.9679 18.9038 19.9038C18.9679 19.8397 19 19.7692 19 19.6923V10.3077H4.99997V19.6923C4.99997 19.7692 5.03202 19.8397 5.09612 19.9038C5.16024 19.9679 5.23077 20 5.3077 20ZM4.99997 8.80774H19V6.30772C19 6.23079 18.9679 6.16026 18.9038 6.09614C18.8397 6.03204 18.7692 5.99999 18.6923 5.99999H5.3077C5.23077 5.99999 5.16024 6.03204 5.09612 6.09614C5.03202 6.16026 4.99997 6.23079 4.99997 6.30772V8.80774Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconWeek.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconWeek;
