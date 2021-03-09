import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

interface inputInterface {
  name: string;
  type?: string;
  icon?: string;
  fluid?: boolean;
}

const Input: FC<inputInterface> = ({ name, type = 'text', icon, fluid }) => {
  const nameCapitalized = `${name.charAt(0).toUpperCase()}${name.substr(1)}`;
  const iconClass = icon === 'left' ? 'pl-10 pr-4' : 'pr-10 pl-4';
  return (
    <div
      className={`input relative ${!fluid ? 'inline-' : ''}flex text-gray-400`}
      data-testid={`input-${name}`}
    >
      <input
        className={`py-2 px-4 focus:border-blue-500 rounded border border-gray-400 focus:outline-none ${
          iconClass || ''
        } ${fluid ? 'w-full' : ''}`}
        type={type}
        id={name}
        name={name}
        placeholder={`${nameCapitalized}...`}
      />
      {icon && (
        <BiSearch
          className={` absolute inline-block h-full w-8 ${
            icon === 'left' ? '' : 'right-0'
          }`}
        />
      )}
    </div>
  );
};

export default Input;
