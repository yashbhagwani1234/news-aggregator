import './App.css';

import React, { Component } from 'react'
import Navbar from './Componets/Navbar';
import News from './Componets/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
       <News/>
      </div>
    )
  }
}


