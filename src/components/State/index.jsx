import React,{Component} from 'react'
export default class State extends Component{
    render(){     
        console.log(this.props.location) 
        return (
            <header>
                Detail-  {this.props.location.state.name}
            </header>
        )
    }
}