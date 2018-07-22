import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import PlanPage from './pages/PlanPage/PlanPage';
import ErrPage from './pages/ErrPage/ErrPage';
import Signup from './components/sign-up';
import LoginForm from './components/login-form'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const AppContext = React.createContext()

class AppProvider extends Component {

  state = {
    currentLoggedInUser: '',
    // setCurrent: () => {
    //   this.setState({ currentLoggedInUser: response.data.username})
    // }
  }

  render() {

      return (
        <AppContext.Provider value={this.state}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p>Join the party, {this.state.username}!</p>
            }
          <Switch>
            <Route exact path='/' component={HomePage}/> 
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/planit/:id' component={PlanPage} />
            <Route path="/login" render={() =>
            <LoginForm
              updateUser={this.updateUser}
              />} />
            <Route path="/signup" render={() =>
            <Signup/>} />
            <Route component={ErrPage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;