import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import PlanItLogo from '../../img/PlanItLogo.png';
import axios from 'axios';

// Router- Link

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    font-family: 'Work Sans', sans-serif;
`;

const NavbarLogo = styled.li`
    float: left;
    margin-left: 1.4em;
    margin-top: .75em;
    margin-bottom: .5em;
`;

const NavbarButton = styled.li`
    text-align: center;
    float: right;
    margin-right: 2em;
    margin-top: 1.2em;
    margin-bottom: 1em;
   
`;

const LinkItem = styled.a`
    color: #2b6aaf;
    text-decoration: none;

    &:hover {
        color: #ffffff;
    }
`;

const LinkItem2 = styled.a`
    color: #2b6aaf;
    text-decoration: none;
    margin-right:1em;

    &:hover {
        color: teal;
    }
`;


class NavBar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault();
        console.log('logging out');
        axios.post('/user/logout').then(response => {
          console.log(response.data);
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error');
        })
      }

   render () {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ');
    console.log(this.props);
    return (
            <header>
                <Nav>
                    <NavbarLogo>
                        <a href='/'>
                        <img src={PlanItLogo} alt='PlanIt Logo' width="55px" height="55px"/>
                        {/* <LinkItem href='/'>PlanIt</LinkItem> */}
                        </a>
                    </NavbarLogo>

                    {/* <NavbarButton>
                        <Button>
                        <LinkItem href='/login'>Login</LinkItem>
                        </Button>
                    </NavbarButton>
                     */}
                    {loggedIn ? (
                            <NavbarButton>
                                <Button>
                                    <LinkItem href=""  onClick={this.logout}>
                                    <span>logout</span></LinkItem>
                                </Button>

                            </NavbarButton>
                        ) : (
                                <NavbarButton>
                                    
                                    <LinkItem2 href="/dashboard">
                                        <span>Home </span>
                                    </LinkItem2>
                                    

                                    <Button>
                                        <LinkItem href="/login">
                                            <span>Login </span>
                                        </LinkItem>
                                    </Button>
                                </NavbarButton>
                            )}

                </Nav>
            </header>
        );
   }
}

export default NavBar;