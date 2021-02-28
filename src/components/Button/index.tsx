import React, { ReactElement, useEffect, useState } from 'react';
import { backgroundColor, radius } from '../../types/index';

interface buttonInterface {
  radius?: radius;
  color?: backgroundColor;
  children: React.ReactNode;
}

const Button: React.FC<buttonInterface> = ({
  radius,
  color,
  children,
}): ReactElement => {
  const [className, setClassName] = useState<string>('button');

  useEffect(() => {
    setClassName((prevState) => prevState.concat(` ${radius}`));
  }, []);

  useEffect(() => {
    setClassName((prevState) => prevState.concat(` ${color}`));
  }, []);

  return (
    <div title="button" className={className}>
      {children}
    </div>
  );
};

export default Button;
