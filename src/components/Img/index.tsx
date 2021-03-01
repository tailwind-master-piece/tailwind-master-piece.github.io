import { FC } from 'react';

interface imgInterface {
  src: string;
  alt?: string;
  bordered?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  circular?: boolean;
}

const Img: FC<imgInterface> = ({
  src,
  alt = 'Description',
  bordered,
  fluid,
  rounded,
  circular,
}) => (
  <div
    className={`img w-40 h-auto ${bordered ? 'border border-gray-400' : ''} ${
      fluid ? 'w-full' : ''
    } ${rounded ? 'rounded-md' : ''} ${circular ? 'rounded-full' : ''}`}
  >
    <img
      className={`w-full ${rounded ? 'rounded-md' : ''} ${
        circular ? 'rounded-full' : ''
      }`}
      src={src}
      alt={alt}
    />
  </div>
);

export default Img;
