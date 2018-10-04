import React from 'react';

const Sync: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M4.37 18.455l-.38 2.685a1 1 0 1 1-1.98-.28l.706-5a1 1 0 0 1 1.117-.852l5.294.678a1 1 0 0 1-.254 1.984l-2.858-.366C7.478 18.986 9.642 20 12.005 20 16.4 20 20 16.398 20 12a1 1 0 0 1 2 0c0 5.502-4.495 10-9.995 10-3.024 0-5.798-1.335-7.636-3.545zm15.26-12.91l.38-2.685a1 1 0 1 1 1.98.28l-.706 5a1 1 0 0 1-1.117.852l-5.294-.678a1 1 0 0 1 .254-1.984l2.858.366C16.522 5.014 14.358 4 11.995 4 7.6 4 4 7.602 4 12a1 1 0 0 1-2 0C2 6.498 6.495 2 11.995 2c3.024 0 5.798 1.335 7.636 3.545z" />
  </svg>
);

Sync.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Sync;
