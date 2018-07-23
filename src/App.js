import React from 'react'
import Routes from './Routes'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import './App.css'

const App = () => (
  <div className="App container">
    <Header />
    <Navigation />
    <Routes />
    <Footer />
  </div>
)

export default App
