import { type SVGProps } from 'react';

export const YouTubeIcon = ({
  className,
  role = 'img',
  viewBox = '0 0 48 34.34',
  xmlns = 'http://www.w3.org/2000/svg',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    role={role}
    viewBox={viewBox}
    xmlns={xmlns}
    {...props}
  >
    <path
      d="M39.27,7.17c-7.21-.46-23.24-.46-30.45,0C1,7.63-.11,11.41,0,24c0,12.36,1,16.37,8.7,16.83,7.21.46,23.24.46,30.56,0,7.9-.46,8.93-4.47,8.7-16.83S47.06,7.63,39.27,7.17Zm-22.21,25V15.87L34,24Z"
      fill="currentColor"
      transform="translate(0 -6.83)"
    />
  </svg>
);
