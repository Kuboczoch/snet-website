import React, {Component} from 'react';
import './style.scss';
import Trianglify from 'trianglify';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            colors: 4,
            baseColor: "#333032"
        }
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

    componentDidMount() {
        let a = [];
        let n = Math.floor(Math.random() * this.state.colors);
        for (let i = 0; i < this.state.colors; i++) {
            a[n] = App.shadeColor(this.state.baseColor, i * 10);
            n++;
            if (n === this.state.colors)
                n = 0;
        }
        const canvas = Trianglify({
            width: this.state.width,
            height: this.state.height,
            cell_size: Math.random() * 200 + 40,
            x_colors: a
        });
        document.getElementById('root').appendChild(canvas.canvas());
    }

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
