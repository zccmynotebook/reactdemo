
import React,{Component} from 'react'
import './index.css'
export default class Input extends Component{
    render(){
        return (
            <footer>
                <input type="checkbox"/> 已完成1个/ 总共10个 
                <span className="pull-right btn">批量删除</span>
            </footer>
        )
    }
}