
import React,{Component} from 'react'
import './index.css'
 
import {connect} from 'react-redux'
import {checkAll,deleteDone} from '../../redux/action.js'

class Footer extends Component{
      handleCheckAll=(done)=>{
        this.props.checkAll(done)
      }
      deleteDone=()=>{
        this.props.deleteDone()
      }
    render(){
        let {list} = this.props
        let done=list.filter(v=>v.done).length
        return (
            <footer>
                <input type="checkbox" checked={list.length&&done===list.length} onChange={(e)=>{this.handleCheckAll(e.target.checked)}}/> 
                已完成{done}个/ 总共{list.length}个 
                <span className="pull-right btn" onClick={this.deleteDone}>清除已完成</span>
            </footer>
        )
    }
}
export default connect(state=>({list:state}),()=>({
    checkAll,deleteDone
}))(Footer)