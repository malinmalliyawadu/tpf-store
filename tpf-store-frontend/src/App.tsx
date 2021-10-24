import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductItem } from "./components/ProductItem";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductGallery } from "./pages/ProductGallery";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import "react-loading-skeleton/dist/skeleton.css";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkUS3lnSGnfBKIs7ZMdG47DgU1jt6_rTQ",
  authDomain: "tpf-store.firebaseapp.com",
  databaseURL:
    "https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tpf-store",
  storageBucket: "tpf-store.appspot.com",
  messagingSenderId: "753209864014",
  appId: "1:753209864014:web:d0353cce0ad103298cf81f",
  measurementId: "G-EDZ8JV3VX9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

function App() {
  return (
    <MemoryRouter>
      <Header />
      <Switch>
        <Route path="/tpf-store/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/">
          <ProductGallery />
        </Route>
      </Switch>
    </MemoryRouter>
  );
}

export default App;
