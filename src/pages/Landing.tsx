import React, { ReactElement, useEffect, useState } from 'react';
import './styles.css';

import Button from '../components/Button/index';
import Container from '../components/Container/index';

export const Landing: React.FC = (): ReactElement => {
  return (
    <div className="landing-container">
      <header className="landing-container__header">
        <h1>platzi-master-react-tailwind-components</h1>
      </header>
      <div className="landing-container__components">
        <div className="landing-container__component">
          <h2>Button</h2>
          <div className="landing-container__component__container buttons">
            <Button>click me</Button>
            <Button color="bg-blue-800">click me</Button>
            <Button radius="rounded-full" color="bg-indigo-400">
              click me
            </Button>
            <Button
              radius="rounded-full"
              color="bg-red-300"
              textColor="text-blue-500"
            >
              click me
            </Button>
          </div>
        </div>
        <div className="landing-container__component">
          <h2>Container</h2>
          <div className="landing-container__component__container">
            <Container textColor="text-blue-700">
              <div>element</div>
              <div>element</div>
              <div>element</div>
              <div>element</div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
