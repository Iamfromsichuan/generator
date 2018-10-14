import React,{Component} from 'react'
import './Login.css'
import { Flex, WhiteSpace } from 'antd-mobile';
import LoginButton from "../../component/Login/LoginButton";
import Input from "../../component/Login/Input";

class Login extends Component{
    constructor(...args) {
        super(...args)
        this.loginIn = this.loginIn.bind(this)
        this.state={
            type:'primary',
            userName:'',
            password:''
        };
        this.getInputUserName = this.getInputUserName.bind(this);
    }
    loginIn() {
        console.log(`userName--${this.state.userName}--password---${this.state.password}`)
    }
    getInputUserName(x) {
        this.setState({
            userName:x
        });
    }
    getInputPassword(x) {
        this.setState({password:x})
    }
    render() {
        return <div className="Login">
            <Flex style={{width:'90%',margin:'20px auto'}}>
                <Flex.Item style={{border:'1px solid #bbbbbb'}}>
                    <Input inputHasChange={this.getInputUserName} value={this.state.userName} placeholder="请输入用户名"/>
                </Flex.Item>
            </Flex>
            <Flex style={{width:'90%',margin:'0 auto'}}>
                <Flex.Item style={{border:'1px solid #bbbbbb'}}>
                    <Input inputHasChange={this.getInputPassword} value={this.state.password} placeholder="请输入密码"/>
                </Flex.Item>
            </Flex>
            <Flex style={{width:'90%',margin:'0 auto'}}>
                <Flex.Item> <LoginButton type={this.state.type}  handleClick={this.loginIn} content="登陆"/></Flex.Item>
            </Flex>
        </div>
    }
}
export default Login
