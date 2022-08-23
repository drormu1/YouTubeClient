import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from '../Components/LandingPage';
import SearchPage from '../Components/SearchPage'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
function AppRouter() {
    return (
       
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                </Routes>
                <Routes>
                    <Route path='/search/:searchTerm' element={<SearchPage/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>            
        
    )
}

export default AppRouter