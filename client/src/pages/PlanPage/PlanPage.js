import React, { Component } from 'react';
import styled from 'styled-components';
import './PlanPage.css';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';
import PlanMembers from '../../components/PlanMembers/PlanMembers';
import location from '../../img/baseline-location_on-24px.svg';
import dates from '../../img/baseline-date_range-24px.svg';
import members from '../../img/outline-group-24px.svg';


const TripImgDiv = styled.div`
    position: relative;
`;

const TripImg = styled.img`
    width: 100%;
    height: auto;
    opacity: 0.5%;
`;

const TripTitle = styled.h2`
    color: #ffffff;
    position: absolute;
    left: 1em;
    right: 1em;
    top: 45%;
    text-align: center;
    margin: auto;
    font-family: 'Work Sans', sans-serif;
`;

const TripInfoDiv = styled.div`
    margin-left: 1em;
    margin-right: 1em;
    display: flex;
    align-content: left;
    justify-content: left;
`;

const TripInfoImg = styled.img`
    width: 24px;
    height: auto;
    /* justify-content: center; */
`;

const TripInfoMemImg = styled.img`
    width: 24px;
    height: auto;
    margin-bottom: 10px;
    /* justify-content: center; */
`;

const TripInfo = styled.p`
    display: inline-block;
    margin-top: 20px;
    margin-left: .25em;
    margin-right: .25em;
    font-family: 'Roboto', sans-serif;
`;

const MemDiv = styled.div`
    margin: 1em;
`;

const Input = styled.input`
    float: left;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 100%;
	margin-top: .25em;
	margin-bottom: .25em;
	margin-left: .1em;
	margin-right: .25em;
	font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    &:hover {
		border: 1px solid #2b6aaf;
	}
`;

class HomePage extends Component {

    render () {

        return (
            <div className='container clearfix'>
                <div className='InfoPanel' >
                    <TripImgDiv>
                        <TripImg src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Plan image' />
                        <TripTitle> 
                            {/* needs to be replaced with dynamic title */}
                            Camping Trip Title 
                        </TripTitle>
                    </TripImgDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoImg src={location} alt="location icon"/>
                        <TripInfo>Location: </TripInfo>
                        <Input/> 
                    </TripInfoDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoImg src={dates} alt="location icon"/>
                        <TripInfo>Dates: </TripInfo>
                        <Input/> 
                    </TripInfoDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoMemImg src={members} alt="location icon"/>
                        <TripInfo>Members: </TripInfo>
                        <MemDiv>
                            <PlanMembers />
                        </MemDiv>
                    </TripInfoDiv>
                    
                </div>
                <div className='VisualPanel'>
                    <div>
                        <Checklists />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;