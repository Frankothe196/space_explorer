import React from 'react';
import "./app.scss"
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SpaceExlorer from "./routes/spaceExplorer/index"

export default function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' index element={<SpaceExlorer/>}/>
            </Routes>
                
        </Router>
    )
}