import React,{Component} from "react";
import { List, InputItem, WhiteSpace } from 'antd';


class Input extends Component{
    constructor(...props) {
        super(...props)
        this.handleChangIn = this.handleChangIn.bind(this)
    }
    handleChangIn(value) {
        this.props.inputHasChange(value)
    }
    render() {
        return <InputItem
                onChange={this.handleChangIn}
                value={this.props.value}
                placeholder={this.props.placeholder}
            >
                <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
            </InputItem>
    }
}
export default Input
