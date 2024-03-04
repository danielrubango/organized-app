import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconSparkles = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-sparkles" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4307_175589)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2997 4.19287L15.7119 5.6324C15.6308 5.83109 15.5438 6.02663 15.4511 6.2188C15.4301 6.26231 15.4088 6.30565 15.3873 6.34882C14.3824 8.36017 12.7508 9.99175 10.7394 10.9967C10.6963 11.0182 10.6529 11.0395 10.6094 11.0605C10.4173 11.1532 10.2217 11.2402 10.023 11.3213L8.5835 11.909L10.023 12.4968C10.2217 12.5779 10.4173 12.6649 10.6094 12.7576C10.6529 12.7786 10.6963 12.7998 10.7394 12.8214C12.7508 13.8263 14.3824 15.4579 15.3873 17.4692C15.4088 17.5124 15.4301 17.5558 15.4511 17.5993C15.5438 17.7914 15.6308 17.987 15.7119 18.1857L16.2997 19.6252L16.8874 18.1857C16.9685 17.987 17.0555 17.7914 17.1482 17.5993C17.1692 17.5558 17.1905 17.5124 17.212 17.4692C18.2169 15.4579 19.8485 13.8263 21.8599 12.8214C21.903 12.7998 21.9464 12.7786 21.9899 12.7576C22.1821 12.6649 22.3776 12.5779 22.5763 12.4968L24.0158 11.909L22.5763 11.3213C22.3776 11.2402 22.1821 11.1532 21.9899 11.0605C21.9464 11.0395 21.903 11.0182 21.8599 10.9967C19.8485 9.99175 18.2169 8.36017 17.212 6.34882C17.1905 6.30565 17.1692 6.26231 17.1482 6.2188C17.0555 6.02663 16.9685 5.83109 16.8874 5.6324L16.2997 4.19287ZM16.2997 8.10987C15.3356 9.64589 14.0365 10.945 12.5005 11.909C14.0365 12.8731 15.3356 14.1722 16.2997 15.7082C17.2637 14.1722 18.5628 12.873 20.0988 11.909C18.5628 10.945 17.2637 9.64589 16.2997 8.10987Z"
            fill={color}
          />
          <path
            d="M4.42973 3.50049C5.01956 5.46689 6.54544 7.01325 8.50381 7.62925L8.58357 7.65433C6.58282 8.23975 5.01658 9.80785 4.42973 11.8082C3.84237 9.80857 2.27605 8.23979 0.275879 7.65433L0.354282 7.62966C2.3129 7.01337 3.83914 5.46701 4.42973 3.50049Z"
            fill={color}
          />
          <path
            d="M5.81415 15.9619C6.32764 17.2196 7.32571 18.2177 8.58338 18.7311C7.32571 19.2446 6.32764 20.2427 5.81415 21.5004C5.30067 20.2427 4.3026 19.2446 3.04492 18.7311C4.3026 18.2177 5.30067 17.2196 5.81415 15.9619Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_4307_175589">
            <rect width="24" height="24" fill="white" transform="translate(0 0.500488)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default IconSparkles;