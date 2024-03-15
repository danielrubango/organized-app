import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCheckboxFilled = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-checkbox-filled" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2704_41496"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2704_41496)">
          <path
            d="M10.6 15.8543L17.323 9.13124L16.2692 8.07741L10.6 13.7466L7.74998 10.8966L6.69615 11.9505L10.6 15.8543ZM5.3077 20.5004C4.80257 20.5004 4.375 20.3254 4.025 19.9754C3.675 19.6254 3.5 19.1979 3.5 18.6927V5.30819C3.5 4.80306 3.675 4.37549 4.025 4.02549C4.375 3.67549 4.80257 3.50049 5.3077 3.50049H18.6923C19.1974 3.50049 19.625 3.67549 19.975 4.02549C20.325 4.37549 20.5 4.80306 20.5 5.30819V18.6927C20.5 19.1979 20.325 19.6254 19.975 19.9754C19.625 20.3254 19.1974 20.5004 18.6923 20.5004H5.3077Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCheckboxFilled;
