import React from 'react';
import Header from './components/Header/Header.jsx';
import LandingSignIn from './components/Landing/SignIn/SignIn.jsx';
import Feature from './components/Feature/Feature.jsx';
import Add from './components/Add/Add.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import Get from './components/Footer/GetStarted.jsx';
import './App.css'

function App() {
  return (
    <>
        <div className="App">
            <Header />
            <main>
                <LandingSignIn />
                <Feature />
                <Add />
                <Testimonials />
                <Get />
            </main>
            <Footer />
        </div>
    </>
  )
}

export default App
