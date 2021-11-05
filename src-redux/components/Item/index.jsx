
import React,{Component} from 'react'
import store from '../../redux/store'

import './index.css'
export default class Item extends Component{
    deleteOne=(id)=>{
        store.dispatch( {
            type: 'DEL_TODO',
            id  
        })
    }
    handleCheck=(id,done)=>{
        store.dispatch( {
            type: 'CHECK_STATUS',
            id,done
        })
    }
    render(){
        let {name,done,id}=this.props
        return (
            <li>  
                <input type="checkbox" checked={done}  onChange={(e)=>{this.handleCheck(id,e.target.checked)}}/>
                <span  className="txt">{name}</span>
                <span  className="pull-right btn" onClick={()=>{this.deleteOne(id)}}>删除</span>
            </li>
        )
    }
}