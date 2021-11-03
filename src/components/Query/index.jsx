
import React,{Component} from 'react'
export default class Query extends Component{
    render(){
        let obj = new URLSearchParams(this.props.location.search);
        console.log(obj)
        return (
            <header>
                Detail- {obj.get('name')} -{obj.get('city')}
            </header>
        )
    }
}