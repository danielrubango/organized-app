import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconNew = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-new" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4307_160631"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4307_160631)">
          <path
            d="M12 21.4427C11.5987 21.4427 11.2439 21.3369 10.9356 21.1254C10.6272 20.9139 10.4115 20.6363 10.2884 20.2927H9.99997C9.59101 20.2927 9.23877 20.1449 8.94327 19.8494C8.64776 19.5539 8.5 19.2017 8.5 18.7927V15.512C7.49103 14.9005 6.69712 14.0806 6.11827 13.0524C5.53942 12.0242 5.25 10.9235 5.25 9.75046C5.25 7.86843 5.90448 6.27292 7.21345 4.96394C8.52243 3.65497 10.1179 3.00049 12 3.00049C13.882 3.00049 15.4775 3.65497 16.7865 4.96394C18.0955 6.27292 18.75 7.86843 18.75 9.75046C18.75 10.944 18.4605 12.0498 17.8817 13.0678C17.3028 14.0857 16.5089 14.9005 15.5 15.512V18.7927C15.5 19.2017 15.3522 19.5539 15.0567 19.8494C14.7612 20.1449 14.4089 20.2927 14 20.2927H13.7115C13.5884 20.6363 13.3727 20.9139 13.0644 21.1254C12.7561 21.3369 12.4013 21.4427 12 21.4427ZM9.99997 18.7927H14V17.8543H9.99997V18.7927ZM9.99997 16.9697H14V16.0004H9.99997V16.9697ZM9.79997 14.5005H11.4038V11.5889L9.26153 9.44661L10.1 8.60816L12 10.5082L13.9 8.60816L14.7384 9.44661L12.5961 11.5889V14.5005H14.2C15.1 14.0671 15.8333 13.4296 16.4 12.588C16.9666 11.7463 17.25 10.8005 17.25 9.75046C17.25 8.2838 16.7416 7.04213 15.725 6.02546C14.7083 5.0088 13.4666 4.50046 12 4.50046C10.5333 4.50046 9.29164 5.0088 8.27497 6.02546C7.25831 7.04213 6.74997 8.2838 6.74997 9.75046C6.74997 10.8005 7.03331 11.7463 7.59997 12.588C8.16664 13.4296 8.89997 14.0671 9.79997 14.5005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconNew;