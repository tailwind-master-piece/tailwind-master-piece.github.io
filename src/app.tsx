import * as React from 'react';
import { Loader, Button } from './components';

function App(): JSX.Element {
  return (
    <div className="p-4">
      <Button color="blue" radius="lg">
        <Loader className="mr-2" color="text-indigo-600" size="text-lg" />
        Loading...
      </Button>
    </div>
  );
}

export default App;
