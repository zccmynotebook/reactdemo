
import React,{Component} from 'react'
import Item from '../Item'
import './index.css'
import store from '../../redux/store'

export default class Input extends Component{
    render(){
        let list = store.getState()
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