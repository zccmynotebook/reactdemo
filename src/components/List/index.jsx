
import React,{Component} from 'react'
import Item from '../Item'
import './index.css'
import {connect} from 'react-redux'

class List extends Component{
    render(){
        let {list} = this.props
        return (
            <ul>
               {
                    list.map(v=>{
                        return (
                            <Item {...v} key={v.id}></Item>                           
                        )
                    })
               }             
            </ul>
        )
    }
}

export default connect(state=>({list:state}),null)(List)