/* eslint-disable react/react-in-jsx-scope */
import CounterMethod from './components/CounterMethod';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="App">
      <CounterMethod />
      <CounterClass />
      <div calssName="post">
        <div calssName="post">
          <strong>1. JavaScript</strong>
          <div>
            Javascript is a language
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
