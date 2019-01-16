import React, {Component} from 'react';
import logo from './logo.png';

class Star extends Component {

    render() {
        return (
            <div className="star">
                <img src={logo} alt={"Logo"}/>
                <div>
                    <h1>SNET</h1>
                    <hr/>
                    <span><a className={"text-higlight"} href="http://starchasers.pl">Starchasers</a> network</span>
                    <span className="author"><a href="https://github.com/Kuboczoch">made by Kuboczoch</a></span>
                </div>
            </div>
        );
    }
}

export default Star;
