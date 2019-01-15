import React, {Component} from 'react';
import logo from './logo.png';

class Star extends Component {

    render() {
        return (
            <div className="star">
                <img src={logo}/>
                <h1>SNET</h1>
                <hr/>
                <span>Starchasers network</span>
            </div>
        );
    }
}

export default Star;
