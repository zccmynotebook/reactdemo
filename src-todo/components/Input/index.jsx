
import React,{Component} from 'react'
import { nanoid } from 'nanoid'
import './index.css'
export default class Input extends Component{
    addOne=(e)=>{
        let {keyCode,target}=e
        let v=target.value.trim()
        if(v==='') return
        if(keyCode===13){
           this.props.addOne({id:nanoid(),name:v,done:false}) 
           target.value=''
        }
    }
    render(){
        return (
            <header>
                <input type="text" onKeyUp={this.addOne}/>
            </header>
        )
    }
}