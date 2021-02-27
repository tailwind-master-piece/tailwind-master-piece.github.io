import { render } from 'react-dom';
import './assets/styles.css';
import Button from './components/Button';

const root = document.getElementById('root');

render(
  <div className="div">
    <Button radius="xl" color="pink">
      {' '}
      hello there{' '}
    </Button>
    <Button radius="xl" color="red">
      {' '}
      hello there{' '}
    </Button>
    <Button radius="xl" color="blue">
      {' '}
      hello there{' '}
    </Button>
  </div>,
  root
);
