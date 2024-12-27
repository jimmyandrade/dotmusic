import { type SVGProps } from 'react';

export const ShoppingCartIcon = ({
  className,
  height = 24,
  width = 24,
  viewBox = '0 0 24 24',
  xmlns = 'http://www.w3.org/2000/svg',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns={xmlns}
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
