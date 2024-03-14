import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const ItemsPerPage = 6
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={ItemsPerPage} country="in" category="general"></News>} />
          <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={ItemsPerPage} country="in" category="business"></News>} />
          <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={ItemsPerPage} country="in" category="entertainment"></News>} />
          <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={ItemsPerPage} country="in" category="health"></News>} />
          <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={ItemsPerPage} country="in" category="science"></News>} />
          <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={ItemsPerPage} country="in" category="sports"></News>} />
          <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={ItemsPerPage} country="in" category="technology"></News>} />
        </Routes>
      </Router>
    </>
  )
}

export default App