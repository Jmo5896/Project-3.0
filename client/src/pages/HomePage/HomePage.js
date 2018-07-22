import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import defaultImage from '../../img/defaultPlanImages/4.jpg';
import addFeature from '../../img/red.png';
import manageFeature from '../../img/fairy.png';
import checklistFeature from '../../img/gold.png';


const Container = styled.div`
    width: 70%;
    margin: auto;
`;

const JumbotronDiv = styled.div`
    position: relative;
    text-align: center;
    color: #ffffff;
`;

const PlanIt = styled.h1`
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    font-family: 'Roboto', sans-serif; 
`;

const PlanItInfo = styled.p`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-family: 'Work Sans', sans-serif; 
`;

const Jumbotron = styled.img`
    max-width: 100%;
    height: auto;
`;

const InfoDiv = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
`;

const About = styled.h2`
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

const Info = styled.p`
    font-family: 'Work Sans', sans-serif;
`;

const FeatureDiv = styled.div`
    display: inline-block;
    margin-left: 7em;
    margin-right: auto;
    margin-bottom: 2em;
    margin-top: 1em;
`;

const FeatureImg = styled.img`
    width: 200px;
    height: auto;
`;

const FeatureInfo = styled.p`
    overflow-wrap: normal;  
    width: 200px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`;

class HomePage extends Component {

    render () {
        return (
            <Fragment>
                <JumbotronDiv>
                    <Jumbotron src={defaultImage} alt="Photo"></Jumbotron>
                    <PlanIt>PlanIt</PlanIt>
                    <PlanItInfo>write a tagline here...</PlanItInfo>
                </JumbotronDiv>
                <Container >
                    <InfoDiv>
                        <About> About </About>
                        <Info>
                            PlanIt is an interactive trip planning web application that allows you to create, plan, and manage your camping trips. 
                            You can add other members to your existing plans to get everyone on the same page for any upcoming trips. <br/><br/>
                            With PlanIt, you can add interactive checklists to your plans and assign line items to specific plan members 
                            or let members decide what they'd like to bring themselves. 
                            To stay organized on what everyone needs to bring, these list items can have a quantity and price, 
                            so everyone knows how much to bring and a rough estimate of the costs. <br/><br/>
                            Never again get caught on a trip wishing, "Oh man, I wish I'd membered to bring...". 
                            Join PlanIt today for <b><em>FREE</em></b> and stay organized and accountable!
                        </Info>
                    </InfoDiv>
                    <div>
                        <FeatureDiv>
                            <FeatureImg src={manageFeature} alt="Fairy Planet"/>
                            <FeatureInfo>blah blah blah blah Add a planned event to help you and your friends get on the same page</FeatureInfo>
                        </FeatureDiv>
                        <FeatureDiv>
                            <FeatureImg src={addFeature} alt="Red Planet"/>
                            <FeatureInfo>Manage plan information such as dates, descriptions, who's coming, and checklists for what to bring</FeatureInfo>
                        </FeatureDiv>
                        
                        <FeatureDiv>
                            <FeatureImg src={checklistFeature} alt="Gold Planet"/>
                            <FeatureInfo>Checkoff list items to assign them to your user and specify the quantity you're bringing</FeatureInfo>
                        </FeatureDiv>
                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default HomePage;