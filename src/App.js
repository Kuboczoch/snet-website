import React, {Component} from 'react';
import './style.scss';
import Trianglify from 'trianglify';
import Star from "./Star";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            colors: 4,
            baseColor: "#2040ae"
        };
        this.resize = this.resize.bind(this)
    }

    static shadeColor(color, percent) {

        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        let RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
        let GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
        let BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    canvas() {
        let a = [];
        let n = Math.floor(Math.random() * this.state.colors);
        for (let i = 0; i < this.state.colors; i++) {
            a[n] = App.shadeColor(this.state.baseColor, i * -20);
            n++;
            if (n === this.state.colors)
                n = 0;
        }
        return Trianglify({
            width: this.state.width,
            height: this.state.height,
            cell_size: Math.random() * 200 + 40,
            x_colors: a
        });
    }

    resize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
        document.getElementsByTagName('svg')[0].append(this.canvas().svg())
    };


    componentDidMount() {
        document.getElementById('root').appendChild(this.canvas().svg());
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <div className="App">
                <Star/>
            </div>
        );
    }
}

export default App;
