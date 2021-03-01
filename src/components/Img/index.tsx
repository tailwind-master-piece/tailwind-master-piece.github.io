import { FC } from 'react';

interface imgInterface {
  src: string;
  alt?: string;
}

const Img: FC<imgInterface> = ({ src, alt = 'Description' }) => (
  <div className="img w-40 h-auto">
    <img className="w-full" src={src} alt={alt} />
  </div>
);

export default Img;
