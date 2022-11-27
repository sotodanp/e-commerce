import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Checkout from './pages/checkout/Checkout';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import { useAuthContext } from './hooks/useAuthContext';




function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
          {user && <Header />}
          <Routes>
            {user && <Route path='/' element={<Home />} />}
            {user && <Route path='/checkout' element={<Checkout />} />}
            {user && <Route path='/login' element={<Login />} />}
            {user && <Route path='/*' element={<Home />} />}

          </Routes>

        </>

      )}


    </div>
  );
}

export default App;
