import React, { Component } from 'react';
import './App.css';
import Calculator from "./component/Calculator/Calculator";
import { Button } from 'antd-mobile';
import Login from "./Page/Login/Logiin";



function handleSubmit(x) {
    alert(x)
}
class App extends Component {
  render() {
    return (
        <Login/>
    );
  }
}

export default App;
