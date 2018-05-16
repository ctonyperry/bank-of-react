import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import CreditsList from "./components/CreditsList"
import DebitsList from "./components/DebitsList";
import DebitsPage from './components/DebitsPage'


import LogIn from "./components/Login";
import Debit from "./components/Debit";

import axios from 'axios'

class App extends Component {

    constructor() {
        super();

        this.state = {
            accountBalance: 14568.27,
            currentUser: {
                userName: 'bob_loblaw',
                memberSince: '08/23/99',
            }
        }
    }

    getDebits=()=>{
        axios.get('/debits')
        .then((response) => {
            this.setState({debits: response.data})
        })
    }

    getCredits=()=>{
        axios.get('/credits')
        .then((response) => {
            this.setState({credits: response.data})
        })
    }

   


    calculateTotalDebits=()=>{
        this.setState({totalDebits: this.state.debits.reduce((totalValue, debit)=>
        totalValue + debit
        ,0)
    })
       
    }


    calculateTotalCredits=()=>{
        this.setState({totalCredits:  this.state.credits.reduce((totalValue, credit)=>
        totalValue + credit
        ,0)})
       
    }

    getAccountBalance=()=>{
        this.state.accountBalance=this.state.totalCredits - this.state.totalDebits
    }

  
    mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
    }

    componentWillMount () {
        this.getCredits()
        this.getDebits()
        

      }

    render() {
        const accountBalance = this.getAccountBalance()

        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>)
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        )
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
        const DebitsPageComponent = () => <DebitsPage debits={this.state.debits}  {...this.props}/>

        return (
            <Router>
                <div>
                    <Route exact path="/" render={HomeComponent}/>
                    <Route exact path="/userProfile" render={UserProfileComponent}/>
                    <Route exact path="/login" render={LogInComponent}/>
                    <Route exact path="/debit" render={DebitsPageComponent}/>
                    <div>

                    </div>
                </div>
            </Router>
        );
    }

}

export default App;