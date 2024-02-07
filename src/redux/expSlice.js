import {createSlice} from "@reduxjs/toolkit"

//TODO: defining initial state here to use in slice
const initialState ={
    expenditure:[]
}

//*Creating slice to keep reducer (current state+ action)
const expSlice = createSlice({
    //below is the slice name
    name: 'expenditure',
    initialState,
    reducers:{
        //*reducer holding current state and action
        addExp:(state,action)=>{
            //state is for redux to understand
            console.log("state is",state.expenditure)
            console.log("action is ",action.payload)
            //pushing this action payload to the state to keep the count of list
            //state.expenditure => will keep the count of items adding to reducer
            //creating ID to have unique key to perform CRUD opeations 
           let newData= state.expenditure.push({id:Date.now(),category:action.payload})
           console.log("newData is",newData)
        },
        deleteExp:(state,action)=>{
            state.expenditure= state.expenditure.filter((expend)=>expend.id!==action.payload)
            console.log("delete state is",state.expenditure)
            console.log("delete action is ",action.payload)
         
            
        }
    }
})

export const {addExp} = expSlice.actions
export const {deleteExp} = expSlice.actions

export default expSlice.reducer