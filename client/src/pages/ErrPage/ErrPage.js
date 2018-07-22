import React, { Component } from 'react';
import './ErrPage.css';
import Emoji from '../../img/errPage.png';
// import Logo from '../../img/PlanItLogo.png';

class ErrPage extends Component {

    render () {
        return (
            <div className = 'err_body'>
                <img className = 'emoji' src = {Emoji} alt = {'emoji'} />
                <p className = 'errMsg'>Uh-Oh, you did something we didn't PLAN for, try something different.</p>
            </div>
        );
    }
}

export default ErrPage;