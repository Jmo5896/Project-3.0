//At the very least, we need this component to display the members who are assigned to a plan and the button to add new users to the plan. Stretch:
    //allow these users to be clickable, which would show the user information.
//make axios call to the associated Planit and grab the list of members
    //should be a get call that maps through and prints the list of members

import React, { Fragment } from 'react';
import styled from 'styled-components';
import memberImg from '../../img/50x50.png';
import AddUser from '../AddUser/AddUser';

const MemImg = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;  
`;

const MemDiv = styled.div`
    display: flex;
    align-content: left;
    justify-content: left;
`;

let members = [];

const PlanMembers = () => {

    const grabMembers = () => {
        //axios (GET) call, store in array members
        
    }

    return (
        <Fragment>
            <MemDiv>
                <MemImg src={memberImg} alt='Group member 1' />
                <MemImg src={memberImg} alt='Group member 2' />
                <MemImg src={memberImg} alt='Group member 3' />
                <MemImg src={memberImg} alt='Group member 4' />
            <AddUser />
            </MemDiv>
        </Fragment>
    )
}

export default PlanMembers;