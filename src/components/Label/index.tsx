/* Icons */
import { GrMail } from 'react-icons/gr';

import { FC } from 'react';

interface labelInterface {
  text?: string;
  image?: boolean;
}

const Label: FC<labelInterface> = ({ text }) => (
  <div className="label inline-flex leading-none text-sm align-baseline bg-gray-300 text-gray-700 px-3 py-2 rounded">
    <GrMail
      className="inline-block align-baseline mr-3"
      data-testid="label-normal"
    />
    <span className="inline-block align-baseline">{text}</span>
  </div>
);

export default Label;
