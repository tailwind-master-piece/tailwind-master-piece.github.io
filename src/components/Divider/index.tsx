import React, { ReactElement, useEffect, useState } from 'react';
import { divideColor, dividerHeight, divideStyle } from '../../types';

interface dividerInterface {
  height?: dividerHeight;
  color?: divideColor;
  style?: divideStyle;
}

const Divider: React.FC<dividerInterface> = ({
  height,
  color,
  style,
}): ReactElement => {
  const [classes, setClasses] = useState('divider');

  useEffect(() => {
    height
      ? setClasses((prevState) => prevState.concat(` ${height}`))
      : setClasses((prevState) => prevState.concat(' divide-y-2'));
    color && setClasses((prevState) => prevState.concat(` ${color}`));
    style && setClasses((prevState) => prevState.concat(` ${style}`));
  }, []);

  return (
    <div className={classes}>
      <div></div>
      <div></div>
    </div>
  );
};
export default Divider;
