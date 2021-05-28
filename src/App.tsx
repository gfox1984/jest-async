import SomethingComponent from "./SomethingComponent";
import SomethingProvider from "./SomethingProvider";
import { Something } from "./types";
import './App.css';

function App() {
  const something: Something = {
    getValueAsync: () => Promise.resolve(123)
  };

  return (
    <SomethingProvider something={something}>
      <SomethingComponent />
    </SomethingProvider>
  );
}

export default App;
