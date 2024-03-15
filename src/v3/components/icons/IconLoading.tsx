import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLoading = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-loading" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2740_38970"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2740_38970)">
          <path
            d="M11.9969 21.5004C10.6964 21.5004 9.4687 21.2513 8.31385 20.7529C7.159 20.2546 6.15048 19.5743 5.28828 18.7122C4.42609 17.85 3.74583 16.8414 3.2475 15.6866C2.74917 14.5317 2.5 13.304 2.5 12.0035C2.5 10.6871 2.74968 9.45398 3.24905 8.30411C3.7484 7.15426 4.4282 6.14921 5.28845 5.28894C6.14872 4.42869 7.15742 3.74889 8.31455 3.24954C9.4717 2.75017 10.7002 2.50049 12 2.50049C12.2125 2.50049 12.3906 2.5724 12.5343 2.71621C12.6781 2.86003 12.75 3.03823 12.75 3.25081C12.75 3.46341 12.6781 3.64151 12.5343 3.78509C12.3906 3.92867 12.2125 4.00046 12 4.00046C9.78331 4.00046 7.89581 4.77963 6.33748 6.33796C4.77914 7.8963 3.99998 9.7838 3.99998 12.0005C3.99998 14.2171 4.77914 16.1046 6.33748 17.663C7.89581 19.2213 9.78331 20.0005 12 20.0005C14.2166 20.0005 16.1041 19.2213 17.6625 17.663C19.2208 16.1046 20 14.2171 20 12.0005C20 11.7876 20.0719 11.6094 20.2157 11.4659C20.3595 11.3223 20.5377 11.2505 20.7503 11.2505C20.9629 11.2505 21.141 11.3224 21.2846 11.4661C21.4282 11.6098 21.5 11.788 21.5 12.0005C21.5 13.3003 21.2503 14.5287 20.7509 15.6859C20.2516 16.843 19.5718 17.8517 18.7115 18.712C17.8512 19.5722 16.8462 20.252 15.6963 20.7514C14.5465 21.2508 13.3133 21.5004 11.9969 21.5004Z"
            fill={color}
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLoading;
