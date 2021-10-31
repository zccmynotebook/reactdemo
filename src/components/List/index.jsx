
import React,{Component} from 'react'
import Item from '../Item'
import './index.css'
export default class Input extends Component{
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