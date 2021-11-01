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
import { Footer } from "./components/Footer";
import { OrderSuccess } from "./pages/OrderSuccess";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: String(import.meta.env.FIREBASE_API_KEY),
  authDomain: "tpf-store.firebaseapp.com",
  databaseURL:
    "https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tpf-store",
  storageBucket: "tpf-store.appspot.com",
  messagingSenderId: "753209864014",
  appId: "1:753209864014:web:d0353cce0ad103298cf81f",
  measurementId: "G-EDZ8JV3VX9",
};

console.log("fbkey", import.meta.env.FIREBASE_API_KEY);

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

export const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51ImsswDsplRnOeEPjtLngUFwX1z3uvuY3eCVLatsZg8iJRjeS70wXtVHPujBKT8R6EnyMrHauloSrxdTXe9wkwtj00Cvqwu0JO";
// export const STRIPE_PUBLISHABLE_KEY =
//   "pk_test_51ImsswDsplRnOeEPtpLPuPbxDoJoH5HqpzrnVGcNqysnqEyQypWShKMnPX8sgpAXuhUM9GvwnhuJxxpsvTnZ4VFw00RKZhpRc8";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <BrowserRouter>
        <Header />
        <main className="mb-auto">
          <Switch>
            <Route path="/store/order/success">
              <OrderSuccess />
            </Route>
            <Route path="/store/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/">
              <ProductGallery />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
