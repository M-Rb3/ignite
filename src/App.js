import React from "react";
import { Route } from "react-router-dom";
// Components
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Style
import GlobalStyle from "./components/GlobalStyls";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
