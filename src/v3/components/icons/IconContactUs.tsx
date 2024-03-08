import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconContactUs = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-contact-us" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4523_130077"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4523_130077)">
          <path
            d="M7.99998 10.8851C8.24484 10.8851 8.45349 10.7988 8.62593 10.6264C8.79836 10.454 8.88458 10.2453 8.88458 10.0005C8.88458 9.7556 8.79836 9.54695 8.62593 9.37451C8.45349 9.20208 8.24484 9.11586 7.99998 9.11586C7.75511 9.11586 7.54646 9.20208 7.37403 9.37451C7.20159 9.54695 7.11538 9.7556 7.11538 10.0005C7.11538 10.2453 7.20159 10.454 7.37403 10.6264C7.54646 10.7988 7.75511 10.8851 7.99998 10.8851ZM12 10.8851C12.2448 10.8851 12.4535 10.7988 12.6259 10.6264C12.7984 10.454 12.8846 10.2453 12.8846 10.0005C12.8846 9.7556 12.7984 9.54695 12.6259 9.37451C12.4535 9.20208 12.2448 9.11586 12 9.11586C11.7551 9.11586 11.5465 9.20208 11.374 9.37451C11.2016 9.54695 11.1154 9.7556 11.1154 10.0005C11.1154 10.2453 11.2016 10.454 11.374 10.6264C11.5465 10.7988 11.7551 10.8851 12 10.8851ZM16 10.8851C16.2448 10.8851 16.4535 10.7988 16.6259 10.6264C16.7984 10.454 16.8846 10.2453 16.8846 10.0005C16.8846 9.7556 16.7984 9.54695 16.6259 9.37451C16.4535 9.20208 16.2448 9.11586 16 9.11586C15.7551 9.11586 15.5465 9.20208 15.374 9.37451C15.2016 9.54695 15.1154 9.7556 15.1154 10.0005C15.1154 10.2453 15.2016 10.454 15.374 10.6264C15.5465 10.7988 15.7551 10.8851 16 10.8851ZM2.5 21.0389V4.30819C2.5 3.80306 2.675 3.37549 3.025 3.02549C3.375 2.67549 3.80257 2.50049 4.3077 2.50049H19.6923C20.1974 2.50049 20.625 2.67549 20.975 3.02549C21.325 3.37549 21.5 3.80306 21.5 4.30819V15.6927C21.5 16.1979 21.325 16.6254 20.975 16.9754C20.625 17.3254 20.1974 17.5004 19.6923 17.5004H6.03845L2.5 21.0389ZM5.4 16.0005H19.6923C19.7692 16.0005 19.8397 15.9684 19.9038 15.9043C19.9679 15.8402 20 15.7697 20 15.6927V4.30819C20 4.23126 19.9679 4.16073 19.9038 4.09661C19.8397 4.03251 19.7692 4.00046 19.6923 4.00046H4.3077C4.23077 4.00046 4.16024 4.03251 4.09613 4.09661C4.03202 4.16073 3.99998 4.23126 3.99998 4.30819V17.3851L5.4 16.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconContactUs;