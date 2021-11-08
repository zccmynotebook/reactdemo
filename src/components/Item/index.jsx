
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkOne,deleteOne} from '../../redux/action.js'
import './index.css'
class Item extends Component{
    deleteOne=(id)=>{
        console.log(1,this.props.deleteOne)
        this.props.deleteOne(id)
    }
    handleCheck=(id,done)=>{
        this.props.checkOne(id,done)
    }
    render(){
        console.log('render item',this.props,checkOne)
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

export default connect(state=>({list:state}),()=>({
    checkOne,deleteOne
}))(Item)