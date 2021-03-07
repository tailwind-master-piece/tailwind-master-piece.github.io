import React, { ReactElement, useEffect, useState } from 'react';
import {
  horizontalPadding,
  verticalPadding,
  horizontalMargin,
  verticalMargin,
  backgroundColor,
  textColor,
} from '../../types';

interface containerInterface {
  children?: React.ReactNode;
  center?: boolean;
  horizontalPadding?: horizontalPadding;
  verticalPadding?: verticalPadding;
  horizontalMargin?: horizontalMargin;
  verticalMargin?: verticalMargin;
  backgroundColor?: backgroundColor;
  textColor?: textColor;
}

const Container: React.FC<containerInterface> = ({
  children,
  center,
  horizontalPadding,
  verticalPadding,
  horizontalMargin,
  verticalMargin,
  backgroundColor,
  textColor,
}): ReactElement => {
  const [classes, setClasses] = useState('container');

  useEffect(() => {
    center && setClasses((prevState) => prevState.concat(' mx-auto'));
    horizontalPadding &&
      setClasses((prevState) => prevState.concat(` ${horizontalPadding}`));
    verticalPadding &&
      setClasses((prevState) => prevState.concat(` ${verticalPadding}`));
    horizontalMargin &&
      setClasses((prevState) => prevState.concat(` ${horizontalMargin}`));
    verticalMargin &&
      setClasses((prevState) => prevState.concat(` ${verticalMargin}`));
    backgroundColor &&
      setClasses((prevState) => prevState.concat(` ${backgroundColor}`));
    textColor && setClasses((prevState) => prevState.concat(` ${textColor}`));
  }, []);

  return <div className={classes}>{children}</div>;
};

export default Container;
