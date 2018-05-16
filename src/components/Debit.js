import  React from 'react';
import DebitList from './DebitsList'

const Debit = (props)=>{

    
    return (
        <div>{JSON.stringify(props.debits)}</div>)
}
export default Debit