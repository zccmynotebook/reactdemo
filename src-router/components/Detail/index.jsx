
import React,{Component} from 'react'
export default class Detail extends Component{
    render(){
        return (
            <header>
                Detail-{this.props.match.params.name}
            </header>
        )
    }
}