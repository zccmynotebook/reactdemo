
import React,{Component} from 'react'
import { nanoid } from 'nanoid'
import './index.css'
import {connect} from 'react-redux'
import {addOne} from '../../redux/action.js'
class Input extends Component{
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
        console.log('render input',this.props,addOne)

        return (
            <header>
                <input type="text" onKeyUp={this.addOne}/>
            </header>
        )
    }
}

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(state=>({list:state}),{
    addOne,
})(Input)