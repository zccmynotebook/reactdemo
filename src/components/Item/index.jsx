
import React,{Component} from 'react'
import './index.css'
export default class Input extends Component{
    render(){
        let {name}=this.props
        return (
            <li>  
                <input type="checkbox"/>
                <span  className="txt">{name}</span>
                <span  className="pull-right btn">删除</span>
            </li>
        )
    }
}