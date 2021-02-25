import React, { ReactElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface buttonInterface {
  radius?: string;
}

const Button: React.FC<buttonInterface> = ({ radius }): ReactElement => {
  const [className, setClassName] = useState<string>('button');

  useEffect(() => {
    switch (radius) {
      case 'sm':
        setClassName((prevState) => prevState.concat(' rounded-sm'));
        break;
      case 'md':
        setClassName((prevState) => prevState.concat(' rounded-md'));
        break;
      case 'lg':
        setClassName((prevState) => prevState.concat(' rounded-lg'));
        break;
      case 'xl':
        setClassName((prevState) => prevState.concat(' rounded-xl'));
        break;
    }
  }, []);

  return <div title="button" className={className} />;
};

Button.propTypes = {
  radius: PropTypes.string,
};

export default Button;
