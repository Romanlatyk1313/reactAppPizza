import React, { Suspense } from 'react';
import { Routes, Route, } from "react-router-dom";
import './scss/app.scss';
import MainLayouts from './layouts/MainLayouts';
import { Loading } from './components/Loading/Loading';

const Home = React.lazy (() => import('./page/Home'));
const NotFound = React.lazy (() => import('./page/NotFound'));
const Cart = React.lazy (() => import('./page/Cart'));
const PizzaInfo = React.lazy (() => import('./components/PizzaInfo/PizzaInfo'));





function App() {

  return (
    <Routes>
       <Route path="/" element={<MainLayouts />}>
        <Route path='' element={<Suspense fallback={<Loading/>}><Home /></Suspense>} />
        <Route path='cart' element={<Suspense fallback={<Loading/>}><Cart /></Suspense>} />
        <Route path='pizza/:id' element={<Suspense fallback={<Loading/>}><PizzaInfo /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Loading/>}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );



}

export default App;
