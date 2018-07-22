//copy a user from user table(via email) and PUT them in the 'PlanIt members' array
    //api call to aquire user
    //another api call to PUT that user in PlanIt members array
    //need a dropdown or modal to pop up so Admin can input user email
        //needs an input field and a submit button
        //if an email is not in the database, let the user know it's invalid

import React, { Component } from 'react';
import styled from 'styled-components';
import plus from '../../img/baseline-add_circle_outline-24px.svg';
import './AddUser.css';
import Button from '../Button';

const PlusImg = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;
    align-content: left;
    justify-content: left;
`;

const AddButton = Button.extend`
    width: 250px;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
`;

const Input = styled.input`
	padding: .25em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 245px;
	margin-top: 1em;
	margin-bottom: .25em;
	margin-left: 1em;
	margin-right: 1em;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

	/* &:hover {
		border: 1px solid #2b6aaf;
	} */
`;

class AddUser extends Component {
    state ={

    };

   enterMember= event => {
        event.preventDefault();
        //pop-up with input field for email
        //on submission call fetchUser
        document.getElementById("myDropdown").classList.toggle("show");
    };

    fetchUser = event => {
        event.preventDefault();
        //axios call to User table
            //if user exists add to members array for associated plan(PlanIt table)
                //update associated plans members list with new user
            //else msg, "user does not exist"
            // API.PUT({
            //     email:''
            // })
            //     .then(res => this.PUT())
            //     .catch(err => console.log(err));
        
    };
    render() {
        return (
            // <a>
            //     <PlusImg src={plus} onClick={enterMember} alt='Add a member' />
            // </a>
            <div className="dropdown">
                
                    <PlusImg className="dropbtn" src={plus} onClick={this.enterMember} alt='Add a member' />
                
                <div id="myDropdown" className="dropdown-content">
                    <form>
                        {/* Enter an email address:<hr /> */}
                        <Input 
                            placeholder="Enter Email"
                            type="email"
                            name="addemail"
                            innerRef={x => { this.input = x }}
                            onMouseEnter={() => this.input.focus()}>
                        </Input>
                    </form>
                    <br />
                    <AddButton type='submit' onClick={this.fetchUser}>Add Member</AddButton>
                </div>
            </div>
        )
    };
   
    
}

export default AddUser;