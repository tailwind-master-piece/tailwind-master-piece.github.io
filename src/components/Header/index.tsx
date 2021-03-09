import React, { ReactElement, useEffect, useState } from 'react';
import {
  backgroundColor,
  textColor,
  numberOfColumns,
  horizontalPadding,
  verticalPadding,
  horizontalMargin,
  verticalMargin,
} from '../../types/index';

interface headerInterface {
  children?: React.ReactNode;
  backgroundColor?: backgroundColor;
  columns?: numberOfColumns;
  horizontalPadding?: horizontalPadding;
  verticalPadding?: verticalPadding;
  horizontalMargin?: horizontalMargin;
  verticalMargin?: verticalMargin;
  textColor?: textColor;
}

const Header: React.FC<headerInterface> = ({
  columns,
  backgroundColor,
  textColor,
  horizontalMargin,
  horizontalPadding,
  verticalMargin,
  verticalPadding,
  children,
}): ReactElement => {
  const [className, setClassName] = useState<string>('grid');

  useEffect(() => {
    columns && setClassName((prevState) => prevState.concat(` ${columns}`));
    backgroundColor &&
      setClassName((prevState) => prevState.concat(` ${backgroundColor}`));
    textColor && setClassName((prevState) => prevState.concat(` ${textColor}`));
    horizontalMargin &&
      setClassName((prevState) => prevState.concat(` ${horizontalMargin}`));
    horizontalPadding &&
      setClassName((prevState) => prevState.concat(` ${horizontalPadding}`));
    verticalMargin &&
      setClassName((prevState) => prevState.concat(` ${verticalMargin}`));
    verticalPadding &&
      setClassName((prevState) => prevState.concat(` ${verticalPadding}`));
  }, []);

  return <div className={className}>{children}</div>;
};
export default Header;
