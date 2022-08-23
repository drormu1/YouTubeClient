import './App.css';
import {Counter} from './features/counter/Counter.js';
import AppRouter from './Config/AppRouter';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
     <AppRouter />
    </div>
  );
}

export default App;
