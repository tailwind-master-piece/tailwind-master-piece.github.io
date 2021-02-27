import * as React from 'react';

/* Icons */
import { RiLoader5Fill } from 'react-icons/ri';

/* Types */
import { Colors, Size } from '../../types';

interface Props {
  color?: Colors;
  size?: Size;
  className?: string;
}

function Loader({
  color = 'text-black',
  size = 'text-base',
  className,
}: Props): JSX.Element {
  return (
    <span className={className}>
      <RiLoader5Fill className={`inline-block animate-spin ${color} ${size}`} />
    </span>
  );
}

export default Loader;
