import { render } from 'react-dom';
import './assets/styles.css';
import Img from './components/Img';

const root = document.getElementById('root');

render(
  <Img
    src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    circular
  />,
  root
);
