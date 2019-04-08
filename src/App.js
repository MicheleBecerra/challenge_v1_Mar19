import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to='/public/post'> Todos los post del la API </Link>
        <br/>
        <Link to= '/public/post/:idPost' > Artículo del Post Seleccionado </Link>       
        </div>
      </Router>

    );
  }
}

export default App;
