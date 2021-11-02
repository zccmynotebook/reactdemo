
import React,{Component} from 'react'
import Item from '../Item'
import './index.css'
import PropTypes from 'prop-types'; // ES6

export default class Input extends Component{
    static propTypes={
        list:PropTypes.array.isRequired,
        deleteOne:PropTypes.func,
        handleCheck:PropTypes.func,
    }
    render(){
        let {list,deleteOne,handleCheck} = this.props
        let obj={handleCheck,deleteOne}
        return (
            <ul>
               {
                    list.map(v=>{
                        return (
                            <Item {...v} key={v.id}  {...obj}></Item>                           
                        )
                    })
               }
               
            </ul>
        )
    }
}