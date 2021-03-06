
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component{
    forward=()=>{
      this.props.history.goForward()
    }
    back=()=>{
      this.props.history.goBack()
    }
    render(){

        return (
          <div className="center">
            <button type="button" className="btn btn-success" onClick={this.forward}>εθΏ</button>
            &nbsp;
            <button type="button" className="btn btn-info"  onClick={this.back}>ει</button>
          </div>
        )
    }
}

export default withRouter(Header)