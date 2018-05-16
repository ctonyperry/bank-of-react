import React, { Component } from 'react'
import axios from 'axios'

class CreditsList extends Component {

    state = {
        debits: []
    }

    componentDidMount() {
        axios.get('/credits')
            .then((response) => {
                this.setState({credits: response.data})
            })
    }

    render() {
        return (
            <div>
               Yo
            </div>
        )
    }
}

export default CreditsList