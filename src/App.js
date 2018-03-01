import React from 'react';
import Routes from "./Routes";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';

const App = () => (
    <div className="App container">
        <Navigation />
        <Routes />
        <Footer />
    </div>
)
export default App;