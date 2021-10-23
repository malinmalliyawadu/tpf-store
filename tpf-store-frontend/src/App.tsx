import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductItem } from "./components/ProductItem";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductGallery } from "./pages/ProductGallery";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/tpf-store/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/">
          <ProductGallery />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
