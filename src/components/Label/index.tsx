/* Icons */
import { GrMail } from 'react-icons/gr';

import { FC } from 'react';

interface labelInterface {
  text?: string;
  src?: string;
  alt?: string;
}

const Label: FC<labelInterface> = ({ text, src, alt }) => (
  <div
    className={`label inline-flex leading-none text-sm align-baseline bg-gray-300 text-gray-700 ${
      !src ? 'px-3 py-2' : 'items-center'
    } rounded`}
  >
    {!src ? (
      <GrMail
        className="inline-block align-baseline mr-3"
        data-testid="label-normal"
      />
    ) : (
      <img
        data-testid="label-image"
        className="inline-block mr-2 w-6 h-6 rounded-l"
        src={src}
        alt={alt}
      />
    )}
    <span className={`inline-block align-baseline ${src && 'pr-2'}`}>
      {text}
    </span>
  </div>
);

export default Label;
