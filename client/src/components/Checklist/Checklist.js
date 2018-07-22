import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ChecklistLineItem from './ChecklistLineItem/ChecklistLineItem';

const ChecklistCardDiv = styled.div`
    float: left;
    text-align: center;
    width: 30%;
    margin-left: 24px;
    margin-right: 8px;
    margin-top: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    background: #ffffff;
`;

const ChecklistTitle = styled.h4`
    font-family: 'Roboto', sans-serif;
`;


class Checklist extends Component {

    render () {
        return (

            <Fragment>
                <ChecklistCardDiv>
                    <ChecklistTitle>
                        Checklist Title
                    </ChecklistTitle>
                    <hr />
                    <ChecklistLineItem>
                    </ChecklistLineItem>
                </ChecklistCardDiv>

                <ChecklistCardDiv>
                    <ChecklistTitle>
                        Checklist Title
                    </ChecklistTitle>
                    <hr />
                    <ChecklistLineItem>
                    </ChecklistLineItem>
                </ChecklistCardDiv>

                <ChecklistCardDiv>               
                    <ChecklistTitle>
                        Checklist Title
                    </ChecklistTitle>
                    <hr />
                    <ChecklistLineItem>
                    </ChecklistLineItem>
                </ChecklistCardDiv>
            </Fragment>
        );
    }

}

export default Checklist;