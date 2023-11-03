import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import useStore from 'store/Module';

export function App() {
  const { count, reset } = useStore();
  return (
    <div className="ui raised segment">
      <h1>Recommendations</h1>
      <p>Recommendations goes here</p>
      <p> {count} people liked the recommendations</p>
      <Button onClick={reset}>reset</Button>
    </div>
  );
}

export default App;
