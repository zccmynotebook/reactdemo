
import React,{Component} from 'react'
import './index.css'
import CusContext from '../../context'
export default class Input extends Component{
    static contextType = CusContext
    render(){
        console.log(this)
        let {name,done,id,handleCheck,deleteOne}=this.props
        return (
            
            <li>  
                <input type="checkbox" checked={done}  onChange={(e)=>{handleCheck(id,e.target.checked)}}/>
                <span  className="txt">{name}</span> - <small>{this.context.top}</small>
                <span  className="pull-right btn" onClick={()=>{deleteOne(id)}}>删除</span>
            </li>
        )
    }
}