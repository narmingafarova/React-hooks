import { createContext } from "react";
import "./App.css";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";

export const Context = createContext("light");
console.log(Context);

function App() {
  return (
    <Context.Provider value="green">
      <div className="App">
        <FunctionalBasedComponent />
      </div>
    </Context.Provider>
  );
}

export default App;
