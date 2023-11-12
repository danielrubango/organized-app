import PropTypes from "prop-types";

const IconStudy = ({ color = "#222222", width = 24, height = 24 }) => {
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
        id="mask0_2457_21496"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2457_21496)">
        <path
          d="M7.64703 20.8474C6.80216 20.8474 6.08134 20.549 5.48456 19.9522C4.88776 19.3554 4.58936 18.6346 4.58936 17.7897V5.09741C4.58936 4.19485 4.90538 3.42754 5.53743 2.79549C6.16948 2.16344 6.93679 1.84741 7.83936 1.84741H19.5893V16.232C19.1598 16.232 18.7928 16.3842 18.4883 16.6887C18.1838 16.9932 18.0316 17.3602 18.0316 17.7897C18.0316 18.2192 18.1838 18.5862 18.4883 18.8907C18.7928 19.1951 19.1598 19.3474 19.5893 19.3474V20.8474H7.64703ZM6.08933 15.1917C6.31625 15.0365 6.55951 14.9211 6.81913 14.8455C7.07875 14.7699 7.35471 14.732 7.64703 14.732H8.28166V3.34739H7.83936C7.35857 3.34739 6.94671 3.51886 6.60376 3.86181C6.26081 4.20476 6.08933 4.61663 6.08933 5.09741V15.1917ZM9.78161 14.732H18.0893V3.34739H9.78161V14.732ZM7.64703 19.3474H16.9913C16.8464 19.1205 16.7336 18.8798 16.6528 18.6253C16.572 18.3708 16.5316 18.0923 16.5316 17.7897C16.5316 17.5038 16.5695 17.2294 16.6451 16.9666C16.7207 16.7038 16.8361 16.4589 16.9913 16.232H7.64703C7.20088 16.232 6.82972 16.3842 6.53356 16.6887C6.23741 16.9932 6.08933 17.3602 6.08933 17.7897C6.08933 18.2358 6.23741 18.607 6.53356 18.9032C6.82972 19.1993 7.20088 19.3474 7.64703 19.3474Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconStudy.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconStudy;
