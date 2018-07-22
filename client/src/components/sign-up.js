import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import email from '../img/outline-email-24px.svg';
import username from '../img/outline-account_circle-24px.svg';
import password from '../img/outline-visibility-24px.svg';

const FormButton = Button.extend`
	width: 100%;
	margin-top: .5em;
`;

const Div = styled.div`
	display: flex;
    align-content: left;
    justify-content: left;
`;

const Img = styled.img`
 	width: 24px;
    height: auto;
`;

const Input = styled.input`
	display: inline-block;
	float: left;
	padding: .5em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 85%;
	margin-top: .5em;
	margin-bottom: .5em;
	margin-left: .5em;
	margin-right: auto;
	font-family: 'Roboto', sans-serif;

	&:hover {
		border: 1px solid #2b6aaf;
	}
`;

const PageDiv = styled.div`
	width: 100%;
	height: 605px;
`;

const Header = styled.h4`
	font-family: 'Work Sans', sans-serif;
	text-align: center;
	font-size: 1.5rem;
`;

const FormDiv = styled.div`
	width: 20%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	margin-top: 2em;

`;

class Signup extends Component {

		state = {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',

		}
		handleInputChange = event => {
			const { name, value } = event.target;
		
			this.setState({
			  [name]: value
			});
		  };
		
		  handleFormSubmit = event => {
			  console.log('sign-up handleSubmit, username: ')
			  console.log(this.state.username)
			event.preventDefault();
			axios.post('/', {
			  email: this.state.email,
			  username: this.state.username,
			  password: this.state.password
		  })
			  .then(response => {
				  console.log(response)
				  if (!response.data.errmsg) {
					  console.log('successful signup')
					  this.setState({ //redirect to login page
						  redirectTo: '/login'
					  })
				  } else {
					  console.log('username already taken')
				  }
			  }).catch(error => {
				  console.log('signup error: ')
				  console.log(error)
	  
			  })
	  }
render() {
	return (
		<PageDiv className="SignupForm">
			<Header>Sign up</Header>
			<FormDiv>
			<form>
				<Div>
					{/* <div>
						<label className="form-label" htmlFor="email">Email</label>
					</div> */}
						<Img src={email} alt="Email Icon"/>
							
						<Input
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
				</Div>
				<div>
					{/* <div>
						<label className="form-label" htmlFor="username">Username</label>
					</div> */}
					<Div>
						<Img src={username} alt="Username Icon"/>
						<Input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleInputChange}
						/>
					</Div>
				</div>

				<div>
					{/* <div>
						<label className="form-label" htmlFor="password">Password: </label>
					</div> */}
					<Div>
						<Img src={password} alt="Password Icon"/>
						<Input
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							// innerRef={x => { this.input = x }}
							// onMouseEnter={() => this.input.focus()}
						/>
					</Div>
				</div>
				<div>
					<div></div>
					<FormButton
						onClick={this.handleSubmit}
						type="submit"
					>Sign up
					</FormButton>
				</div>
			</form>
			</FormDiv>
		</PageDiv>

	)
}
}

export default Signup
