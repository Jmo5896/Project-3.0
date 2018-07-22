import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import profile_img from '../../img/profile_img.jpg';

const ProfileDiv = styled.div`
    margin: 1em;
`;

const ProfilePicDiv = styled.div`
    float: left;
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`;

const ProfilePic = styled.img`
    display: inline;
    margin: 0 auto;
`;

const ProfileInfoDiv = styled.div`
    float: left;
    margin-left: 1em;
    font-family: 'Roboto', sans-serif;
`;

const ProfileName = styled.h4`
    font-family: 'Roboto', sans-serif;
`;

const ProfileInfo = styled.p`
    font-family: 'Roboto', sans-serif;
`;

const ProfileSnippet = props => {

    return (
        <Fragment>
            <ProfileDiv>
                <ProfilePicDiv>
                    <ProfilePic src={profile_img} alt='Profile Picture'>
                    </ProfilePic>
                </ProfilePicDiv>

                <ProfileInfoDiv>
                    <ProfileName>{props.profile.name}</ProfileName>
                    <ProfileInfo>{props.profile.email}</ProfileInfo>
                </ProfileInfoDiv>
            </ProfileDiv>
        </Fragment>
    );  
}

export default ProfileSnippet;