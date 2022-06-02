import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import store from './redux/store';
import { Provider } from 'react-redux';
import Products from './pages/Product';
import Shopping from './pages/Shopping';

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<Shopping/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
