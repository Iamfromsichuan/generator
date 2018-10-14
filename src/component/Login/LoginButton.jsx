import React,{Component} from "react";
import { Button } from 'antd-mobile';

class LoginButton extends Component{
    constructor(...props) {
        super(...props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleClick()
    }
    render() {
        return  <Button style={{borderRadius:0,marginTop:20,marginBottom:20}} type={this.props.type} onClick={this.handleClick}>{this.props.content}</Button>
    }
}

export default LoginButton
