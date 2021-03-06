//处理list数据的state
//一个reducer最好处理一个数据

export default function getList(state=[],action){
    console.log(122,state,action)
    let {type,id,done}=action
    switch(type){
        case 'ADD_TODO':
            let {value} = action
            state=[value,...state]
        break
        case 'DEL_TODO': 
            state=state.filter(v=>{
                return v.id!==id
            })
        break
        case 'DEL_DONE': 
            state=state.filter(v=>!v.done)
        break
        case 'CHECK_STATUS': 
            state=state.map(v=>{
                if(v.id===id) return {...v,done}
                return v
            })
        break
        case 'CHECKALL':  
            state=state.map(v=>{
                return {...v,done}
            }) 
        break
    }
    return state
}