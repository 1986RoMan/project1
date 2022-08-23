import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MoviePage, MoviesPage, NoMatch} from "./pages";
import {MainLayout} from "./layout";
import {MoviesPage1} from "./components";


function App() {
  return (
   <Routes>
     <Route path={'/'}element={<MainLayout />}>
         <Route index element={<Navigate to={'movies'} />}/>
         <Route path={'movies'} element={<MoviesPage />}/>
         <Route path={'search'} element={<MoviesPage1 />}/>
         <Route path={'search/:id'} element={<MoviePage />}/>
         <Route path={'movies/:id'} element={<MoviePage />}/>
         <Route path="*" element={<NoMatch />} />
     </Route>
   </Routes>

  );
}

export default App;
