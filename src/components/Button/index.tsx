import React, { ReactElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface buttonInterface {
  radius?: string;
  color?: string;
  children: React.ReactNode;
}

const Button: React.FC<buttonInterface> = ({
  radius,
  color,
  children,
}): ReactElement => {
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

  useEffect(() => {
    switch (color) {
      case 'red':
        setClassName((prevState) => prevState.concat(' bg-red-200'));
        break;
      case 'blue':
        setClassName((prevState) => prevState.concat(' bg-blue-200'));
        break;
      case 'pink':
        setClassName((prevState) => prevState.concat(' bg-pink-200'));
        break;
    }
  }, []);

  return (
    <div title="button" className={className}>
      {children}
    </div>
  );
};

Button.propTypes = {
  radius: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
