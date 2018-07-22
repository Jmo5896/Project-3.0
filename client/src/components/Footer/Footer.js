import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const FooterDiv=styled.div`
    width: 100%;
    height: 65px;
    background: linear-gradient(to bottom right, teal, #2b6aaf);
    left: 0;
    bottom: 0;
`;

const FooterInfo=styled.p`
    margin: auto;
    color: #ffffff;
    text-align: center;
    font-family: 'Work Sans', sans-serif;
`;

const FooterTitle=styled.h4`
    padding-top: .5em;
    padding-bottom: .25em;
    margin: auto;
    color: #ffffff;
    text-align: center;
    font-family: 'Work Sans', sans-serif;
`;

const FooterLink=styled.a`
    color: #ffffff;
    text-decoration: none;
`;

class Footer extends Component {

    render () {

        return (
            <Fragment>
                <FooterDiv>
                    <FooterTitle> 
                        &copy; PlanIt 2018
                    </FooterTitle>
                    <FooterInfo>
                        Project Collaborators: 
                        <FooterLink href='https://github.com/thamma513' > Tyler Hamilton |</FooterLink>
                        <FooterLink href='https://github.com/Jmo5896' > Justin Moore |</FooterLink>
                        <FooterLink href='https://github.com/wradez' > Walker Radez |</FooterLink>
                        <FooterLink href='https://github.com/dwhite84' > Donald White |</FooterLink>
                        <FooterLink href='https://github.com/alchemistAshley' > Ashley Winnop </FooterLink>
                    </FooterInfo>
                </FooterDiv>
            </Fragment>
        );   
    }
    
}

export default Footer;