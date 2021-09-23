import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
