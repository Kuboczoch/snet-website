import React, {Component} from 'react';
import logo from './logo.png';

class Star extends Component {

    render() {
        return (
            <div className="star">
                <img src={logo} alt={"Logo"}/>
                <h1>SNET</h1>
                <hr/>
                <span><a className={"text-higlight"} href="http://starchasers.pl">Starchasers</a> network</span>
            </div>
        );
    }
}

export default Star;
