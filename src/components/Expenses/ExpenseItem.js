import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const  ExpenseItem = (props) =>{

    const clickHandler = () => {
        console.log("Sudah Kepencet")
    }

    return ( 
        <Card className='expense-item'>
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'> <h2>{props.title}</h2></div> 
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickHandler}>Tombol</button>
        </Card>
    )
}

export default ExpenseItem;