
import React,{Component} from 'react'
import './index.css'
export default class Input extends Component{
    addOne=(e)=>{
        console.log(111,e)
        let {keyCode,target}=e
        if(keyCode===13){
           this.props.addOne({id:4,name:target.value}) 
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