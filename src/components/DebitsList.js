import React, { Component } from 'react'
import axios from 'axios'
import Debit from './Debit'

class DebitsList extends Component {

    state = {
        debits: []
    }

    componentDidMount() {
        axios.get('/debits')
            .then((response) => {
                this.setState({debits: response.data})
            })
    }


    render() {

        return (
            <div>
                this.state.debits.map((debit)=>
                 <Debit amount={debit.amount}
                        description={debit.description}
                        date={debit.date}
                        id={debit.id} />
        )
            </div>
        )
    }
}

export default DebitsList