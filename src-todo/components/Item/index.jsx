
import React,{Component} from 'react'
import './index.css'
export default class Input extends Component{
    render(){
        let {name,done,id,handleCheck,deleteOne}=this.props
        return (
            <li>  
                <input type="checkbox" checked={done}  onChange={(e)=>{handleCheck(id,e.target.checked)}}/>
                <span  className="txt">{name}</span>
                <span  className="pull-right btn" onClick={()=>{deleteOne(id)}}>删除</span>
            </li>
        )
    }
}