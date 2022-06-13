import React from 'react';
import About from '../pages/About/index';
import Home from '../pages/Home/index';
import { BrowserRouter,Routes,Route} from "react-router-dom";

const RoutesPage=()=>{
  return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/:language/:job" element={<Home />} />
            <Route exact path="/:language/:job/about" element={<About />} />
            <Route exact path="/:language/:job/myskills" element={<About />} />
            <Route exact path="/:language/:job/works" element={<About />} />
            <Route exact path="/:language/:job/contact" element={<About />} />
            <Route exact path="/:language/:job/posts" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;