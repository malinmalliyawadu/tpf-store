import { BrowserRouter, MemoryRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductItem } from './components/ProductItem';
import { ProductDetails } from './pages/ProductDetails';
import { ProductGallery } from './pages/ProductGallery';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getPerformance } from 'firebase/performance';
import 'react-loading-skeleton/dist/skeleton.css';
import { OrderSuccess } from './pages/OrderSuccess';
import { Stewardship } from './pages/Stewardship';
import { ErrorPage } from './pages/Error';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyDkUS3lnSGnfBKIs7ZMdG47DgU1jt6_rTQ',
  authDomain: 'tpf-store.firebaseapp.com',
  databaseURL: 'https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tpf-store',
  storageBucket: 'tpf-store.appspot.com',
  messagingSenderId: '753209864014',
  appId: '1:753209864014:web:d0353cce0ad103298cf81f',
  measurementId: 'G-EDZ8JV3VX9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
export const database = getDatabase(app);
const perf = getPerformance(app);

export const STRIPE_PUBLISHABLE_KEY =
  'pk_live_51ImsswDsplRnOeEPjtLngUFwX1z3uvuY3eCVLatsZg8iJRjeS70wXtVHPujBKT8R6EnyMrHauloSrxdTXe9wkwtj00Cvqwu0JO';
// export const STRIPE_PUBLISHABLE_KEY =
//   "pk_test_51ImsswDsplRnOeEPtpLPuPbxDoJoH5HqpzrnVGcNqysnqEyQypWShKMnPX8sgpAXuhUM9GvwnhuJxxpsvTnZ4VFw00RKZhpRc8";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <BrowserRouter>
        <Header />
        <main className="mb-auto">
          <Switch>
            <Route path="/error">
              <ErrorPage />
            </Route>
            <Route path="/stewardship">
              <Stewardship />
            </Route>
            <Route path="/order/success">
              <OrderSuccess />
            </Route>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/">
              <ProductGallery />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
