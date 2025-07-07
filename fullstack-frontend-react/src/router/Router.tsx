import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import Journal from '../pages/Journal';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path='journal' element={< Journal />} />
    </Routes>
  );
};

export default Router;
