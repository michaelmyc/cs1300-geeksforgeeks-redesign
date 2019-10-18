import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Article from './Article.jsx';
import Commemts from './Comments.jsx';

function App() {
  return (
    <div className="App">
      <div className="fixed">
        <Header />
      </div>
      <div className="content">
        <Article />
        <div className="nav">
          <Button variant="success">Prev</Button>
          <Button variant="success">Next</Button>
        </div>
        <Commemts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
