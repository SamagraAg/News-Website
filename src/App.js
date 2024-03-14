import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
const ItemsPerPage = 6

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key="general" pageSize={ItemsPerPage} country="in" category="general"></News>} />
            <Route path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={ItemsPerPage} country="in" category="business"></News>} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={ItemsPerPage} country="in" category="entertainment"></News>} />
            <Route path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={ItemsPerPage} country="in" category="health"></News>} />
            <Route path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={ItemsPerPage} country="in" category="science"></News>} />
            <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={ItemsPerPage} country="in" category="sports"></News>} />
            <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={ItemsPerPage} country="in" category="technology"></News>} />
          </Routes>
        </Router>
      </>
    )
  }
}