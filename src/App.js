import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MoviePage, MoviesPage} from "./pages";
import {MainLayout} from "./layout";


function App() {
  return (
   <Routes>
     <Route path={'/'}element={<MainLayout/>}>
         <Route index element={<Navigate to={'movies'}/>}/>
         <Route path={'movies'} element={<MoviesPage/>}/>
         <Route path={'movie'} element={<MoviePage/>}/>
     </Route>
   </Routes>

  );
}

export default App;
