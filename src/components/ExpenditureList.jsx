import React, { useState } from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteExp } from '../redux/expSlice';
import {useDispatch} from "react-redux"

//rsc
function ExpenditureList(){

  //useSelector((state)) => state.reducerNAme.SliceName  or state.reducerNAme.SliceName-initialvaluename
  //We use useSelector to select the state we want

 const expenditureData= useSelector(((state)=>state.myExpenditure.expenditure))
 console.log("expenditureData is",expenditureData)
 //to use dispatch
 const dispatch =  useDispatch()
 const deleteExpenditure =(id)=>{
    dispatch(deleteExp(id))
 }
    return (
        <div>
            ExpenditureList
            <ol>
                {expenditureData.map((item)=>(
                    <li key={item.id}> {item.category}
                    <button onClick={()=>deleteExpenditure(item.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ExpenditureList;