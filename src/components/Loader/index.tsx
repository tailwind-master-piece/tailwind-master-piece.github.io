import * as React from 'react';

/* Icons */
import { RiLoader5Fill } from 'react-icons/ri';

/* Types */
import { Colors, Size } from '../../types';

interface Props {
  color?: Colors;
  size?: Size;
}

function Loader({
  color = 'text-black',
  size = 'text-base',
}: Props): JSX.Element {
  return (
    <span>
      <RiLoader5Fill className={`inline-block animate-spin ${color} ${size}`} />
    </span>
  );
}

export default Loader;
