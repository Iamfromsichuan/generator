import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import { Button } from 'antd-mobile';
import Login from "./Page/Login/Logiin";

class First extends Component{
    constructor(...args) {
        super(...args);
        this.toMain = this.toMain.bind(this)
    }
    toMain() {
        this.props.history.push('/se');
    }
    render() {
        return (
            <div>
                <h1>
                    我就是登录页
                </h1>
                <button onClick={this.toMain}>点我回到主页</button>
            </div>
        )
    }
}
class second extends Component{
    constructor(...args) {
        super(...args)
    }
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>
                    我就是首页
                </h1>
                <ul>
                    <li><Link to='/se/:1'>首页</Link></li>
                    <li><Link to="/se/:2" >名字</Link></li>
                    <li><Link to="/se/:3" >老虎</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/se/:name" render={(props)=>(
                        <Page name={props.match.params.name}/>
                    )}/>
                </Switch>
        </div>
        )
    }
}
class Page extends Component{
    constructor(...args) {
        super(...args);
    }
    render() {
        if(this.props.name === 1) {
            return <Name age={this.props.name}/>
        }else if(this.props.name === 2) {
            return <Age age={this.props.name}/>
        }else {
            return<AAA age={this.props.name}/>
        }
    }
}
const Name = (props) => (
    <h1>我就是子一路由---{props.age}</h1>
);
const Age = (props) => (
    <h1>我就是子二路由---{props.age}</h1>
);
const AAA = (props)=>(
    <h1>我就是子三路由---{props.age}</h1>
);


function handleSubmit(x) {
    alert(x)
}
class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact  path="/" component={First}/>
                <Route path="/se" component={second}/>
            </Switch>
        </div>
    );
  }
}

export default App;
