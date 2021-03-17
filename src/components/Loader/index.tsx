/* Icons */
import { CgSpinner } from 'react-icons/cg';
import { ImSpinner11, ImSpinner } from 'react-icons/im';

/* Types */
import { Colors, Size } from '../../types';

import { FC } from 'react';

interface loaderInterface {
  arrow?: boolean;
  dotted?: boolean;
  color?: Colors;
  size?: Size;
  className?: string;
}

const Loader: FC<loaderInterface> = ({
  arrow,
  dotted,
  color,
  size,
  className,
}) => {
  if (arrow) {
    return (
      <span className={className}>
        <ImSpinner11
          className={`inline-block animate-spin ${color} ${size}`}
          data-testid="loader-arrow"
        />
      </span>
    );
  } else if (dotted) {
    return (
      <span className={className}>
        <ImSpinner
          className={`inline-block animate-spin ${color} ${size}`}
          data-testid="loader-dotted"
        />
      </span>
    );
  } else {
    return (
      <span className={className}>
        <CgSpinner
          className={`inline-block animate-spin ${color} ${size}`}
          data-testid="loader-normal"
        />
      </span>
    );
  }
};

export default Loader;
