
import React,{Component} from 'react'
import './index.css'
import store from '../../redux/store'

export default class Input extends Component{
    handleCheckAll=(done)=>{
        store.dispatch( {
            type: 'CHECKALL',
            done  
        })
      }
      deleteDone=()=>{
        store.dispatch( {
            type: 'DEL_DONE'
        })
      }
    render(){
        let list = store.getState()
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