import * as React from 'react';
import { Loader, Button } from './components';

function App(): JSX.Element {
  return (
    <div>
      <Button color="">
        <Loader color="text-red-600" size="text-5xl" />
        Loading...
      </Button>
    </div>
  );
}

export default App;
