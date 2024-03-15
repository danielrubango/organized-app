import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCheckCircle = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-check-circle" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2568_31442"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2568_31442)">
          <path
            d="M12.0016 21.5004C10.6877 21.5004 9.45268 21.2511 8.29655 20.7524C7.1404 20.2538 6.13472 19.577 5.2795 18.7222C4.42427 17.8673 3.74721 16.8621 3.24833 15.7065C2.74944 14.5508 2.5 13.3161 2.5 12.0021C2.5 10.6882 2.74937 9.45317 3.24812 8.29704C3.74688 7.14089 4.42375 6.13521 5.27875 5.27999C6.13375 4.42476 7.13917 3.7477 8.295 3.24881C9.45082 2.74993 10.6858 2.50049 12 2.50049C13.0534 2.50049 14.0501 2.65882 14.99 2.97549C15.93 3.29216 16.7923 3.73382 17.5769 4.30049L16.4923 5.41009C15.8462 4.96522 15.1462 4.61906 14.3925 4.37161C13.6388 4.12418 12.8413 4.00046 12 4.00046C9.78331 4.00046 7.89581 4.77963 6.33748 6.33796C4.77914 7.8963 3.99998 9.7838 3.99998 12.0005C3.99998 14.2171 4.77914 16.1046 6.33748 17.663C7.89581 19.2213 9.78331 20.0005 12 20.0005C14.2166 20.0005 16.1041 19.2213 17.6625 17.663C19.2208 16.1046 20 14.2171 20 12.0005C20 11.6492 19.9769 11.3018 19.9308 10.9582C19.8846 10.6147 19.8154 10.2807 19.7231 9.95621L20.9346 8.73509C21.1179 9.24919 21.258 9.77805 21.3548 10.3217C21.4516 10.8653 21.5 11.4249 21.5 12.0005C21.5 13.3146 21.2506 14.5496 20.752 15.7054C20.2533 16.8613 19.5765 17.8667 18.7217 18.7217C17.8669 19.5767 16.8616 20.2536 15.706 20.7523C14.5504 21.2511 13.3156 21.5004 12.0016 21.5004ZM10.5808 16.2543L6.67693 12.3505L7.73075 11.2966L10.5808 14.1466L20.4461 4.26589L21.5 5.31971L10.5808 16.2543Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCheckCircle;
