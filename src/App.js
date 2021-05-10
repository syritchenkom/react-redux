import React from "react";
import { Provider } from "react-redux";

//import { Profile, LoginForm } from "./components";
import { Routing } from "./routing/Routing";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
