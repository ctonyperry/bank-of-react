import  React from 'react';
import DebitsList from './DebitsList'


const DebitsPage = (props)=>{
return (
<div>
    <h1>Debits Page</h1>
    <DebitsList debits={props.debits} />

</div>
)
}


export default DebitsPage