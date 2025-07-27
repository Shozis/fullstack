import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import Journal from '../pages/Journal';
import FirstCourse from '../pages/FirstCourse';
import EditData from '../components/change-data/EditData';


const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path='/journal' element={< Journal />} />
      <Route path='/first' element={< FirstCourse />}/>
      <Route path='/Edit' element={< EditData />}/>
    </Routes>
  );
};

export default Router;
