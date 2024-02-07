import React,{useRef,useState} from 'react';
import {useDispatch} from "react-redux"
import { addExp } from '../redux/expSlice';


function Expenditure(){

    //const[expenditure,setExpenditure]=useState("")
   const inputRef= useRef(null);
   //replacing useState with redux 
   const dispatch =  useDispatch()

   const addNewExp =()=>{
    console.log("newExp", inputRef.current.value)
    const newExp = inputRef.current.value;
       //replacing useState with redux 
    //calling dispatch with reducer created in expSlice and setting the action and state
    if(newExp!==""){
    dispatch(addExp(newExp))
    inputRef.current.value=""
        }   
   //replacing useState with redux 
    //setExpenditure(newExp)
   }
  // console.log("expenditure",expenditure)
    return (
        <div>
           <h1>Expenditure</h1> 
            <input type='text'placeholder='Add you expenditure' ref={inputRef}/>
            <button onClick={addNewExp}>Add Expenditure</button>
        </div>
    );
};

export default Expenditure