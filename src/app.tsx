import Loader from './components/Loader';
import Button from './components/Button';

function App(): JSX.Element {
  return (
    <div className="p-4">
      <Button
        color="bg-red-900"
        radius="rounded-full"
        textColor="text-pink-400"
      >
        <Loader className="mr-2" color="text-indigo-600" size="text-lg" arrow />
        Loading...
      </Button>
    </div>
  );
}

export default App;
