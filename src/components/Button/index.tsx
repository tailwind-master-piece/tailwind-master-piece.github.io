import React, { ReactElement, useEffect, useState } from 'react';
import { backgroundColor, radius, textColor } from '../../types/index';

interface buttonInterface {
  radius?: radius;
  color?: backgroundColor;
  children: React.ReactNode;
  textColor?: textColor;
}

const Button: React.FC<buttonInterface> = ({
  radius,
  color,
  textColor,
  children,
}): ReactElement => {
  const [className, setClassName] = useState<string>('button');

  useEffect(() => {
    if (radius) setClassName((prevState) => prevState.concat(` ${radius}`));
    if (color) setClassName((prevState) => prevState.concat(` ${color}`));
    if (textColor)
      setClassName((prevState) => prevState.concat(` ${textColor}`));
  }, []);

  return (
    <div title="button" className={className} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default Button;
