import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        const style = {fontSize: 32, color: '#8ca5e3'};
        return (
            <div className="App" style={style}>
                hello world!
            </div>
        );
    }
}

export default App;
