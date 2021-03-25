import React, { ReactElement, useEffect, useState } from 'react';
import './styles.css';

import Button from '../components/Button/index';
import Container from '../components/Container/index';
import Divider from '../components/Divider/index';
import Input from '../components/Input/index';

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
            <Button radius="rounded-lg" color="bg-indigo-400">
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
          <div className="landing-container__component__container container">
            <Container
              textColor="text-red-700"
              backgroundColor="bg-blue-300"
              horizontalMargin="mx-10"
              horizontalPadding="px-10"
            >
              <div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
              </div>
            </Container>
            <Container
              textColor="text-blue-700"
              backgroundColor="bg-red-300"
              horizontalMargin="mx-10"
              verticalPadding="py-20"
              horizontalPadding="px-10"
            >
              <div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
              </div>
            </Container>
            <Container
              textColor="text-black"
              backgroundColor="bg-green-300"
              horizontalMargin="mx-10"
              verticalPadding="py-2"
              horizontalPadding="px-10"
            >
              <div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
              </div>
            </Container>
            <Container
              textColor="text-red-700"
              backgroundColor="bg-yellow-300"
              horizontalMargin="mx-10"
              verticalPadding="py-12"
              horizontalPadding="px-16"
            >
              <div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
              </div>
            </Container>
          </div>
        </div>
        <div className="landing-container__component">
          <h2>Divider</h2>
          <div className="landing-container__component__container">
            <div>element</div>
            <Divider
              height="divide-y-8"
              style="divide-dotted"
              color="divide-purple-700"
            />
            <div>element</div>
            <Divider
              height="divide-y-4"
              style="divide-double"
              color="divide-pink-800"
            />
            <div>element</div>
            <Divider
              height="divide-y-2"
              style="divide-dashed"
              color="divide-green-700"
            />
            <div>element</div>
            <Divider
              height="divide-y-2"
              style="divide-solid"
              color="divide-purple-700"
            />
          </div>
        </div>
        <div className="landing-container__component">
          <h2>Input</h2>
          <div className="landing-container__component__container buttons inputs">
            <div>
              <Input name="example 1" type="" />
            </div>
            <div>
              <Input name="example 2" icon="left" />
            </div>
            <div>
              <Input fluid={true} name="example 3" icon="pr-10 pl-4" />
            </div>
            <div>
              <Input name="example 4" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
