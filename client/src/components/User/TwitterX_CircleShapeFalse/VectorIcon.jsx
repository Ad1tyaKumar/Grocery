import { memo, SVGProps } from 'react';

const VectorIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.81 16.9391L38.7025 0H35.1739L22.2369 14.7049L11.9117 0H0L15.6173 22.2384L0 40H3.52858L17.182 24.4675L28.0883 40H40L23.81 16.9391ZM18.9755 22.4336L17.3907 20.2177L4.80107 2.60293H10.2217L20.3849 16.8239L21.963 19.0398L35.1722 37.5239H29.7516L18.9755 22.4336Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
