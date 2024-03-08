import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize="9" country="in" category="general"></News>} />
            <Route path="/business" element={<News key="business" pageSize="9" country="in" category="business"></News>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize="9" country="in" category="entertainment"></News>} />
            <Route path="/health" element={<News key="health" pageSize="9" country="in" category="health"></News>} />
            <Route path="/science" element={<News key="science" pageSize="9" country="in" category="science"></News>} />
            <Route path="/sports" element={<News key="sports" pageSize="9" country="in" category="sports"></News>} />
            <Route path="/technology" element={<News key="technology" pageSize="9" country="in" category="technology"></News>} />
          </Routes>
        </Router>
      </>
    )
  }
}