import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconSynced = ({ color = '#222222', width = 24, height = 24 }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px` }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_4555"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_4555)">
          <path
            d="M6.69629 12.3596L10.5751 16.2538L17.3039 9.52501L16.2501 8.45581L10.5751 14.1308L7.75011 11.3058L6.69629 12.3596Z"
            fill={color}
          />
          <path
            d="M10.75 21.4115C9.57303 21.2461 8.48202 20.8907 7.4769 20.3452C6.47178 19.7996 5.60032 19.1083 4.8625 18.2711C4.12468 17.4339 3.54648 16.4804 3.1279 15.4106C2.7093 14.3407 2.5 13.2038 2.5 12C2.5 10.5218 2.80738 9.15225 3.42213 7.89135C4.03688 6.63045 4.91733 5.53847 6.06348 4.6154H3.375V3.11543H8.74995V8.49038H7.25V5.5923C6.20512 6.3641 5.40223 7.30513 4.84133 8.41538C4.28043 9.52564 3.99998 10.7205 3.99998 12C3.99998 13.9795 4.63395 15.7087 5.9019 17.1875C7.16983 18.6663 8.78585 19.566 10.75 19.8865V21.4115ZM15.25 20.8942V15.5192H16.75V18.4173C17.7884 17.6289 18.5897 16.6821 19.1538 15.5769C19.7179 14.4718 20 13.2795 20 12C20 10.0205 19.366 8.29135 18.0981 6.8125C16.8301 5.33367 15.2141 4.43399 13.25 4.11348V2.5885C15.6102 2.90902 17.5753 3.95164 19.1452 5.71638C20.715 7.48111 21.5 9.57565 21.5 12C21.5 13.4782 21.1926 14.8494 20.5778 16.1135C19.9631 17.3776 19.0826 18.4711 17.9365 19.3942H20.625V20.8942H15.25Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconSynced.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconSynced;