import "../SASS/styles.css";
import React from "react";
import data from '../word-list.json';



class App extends React.Component {
    state = {firstWord: '', secondWord: ''};
    firstWordArr = data;
    secondWordArr = ['studio','agency','creative','design'];

    generateName = () => {
        this.setState({
            firstWord: this.firstWordArr[Math.floor(Math.random() * this.firstWordArr.length)],
            secondWord: this.secondWordArr[Math.floor(Math.random() * this.secondWordArr.length)],
        });
    };

    onClick = () => {
        this.generateName();
    };

    componentDidMount(){
        this.generateName();
    };

    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="col_01">
                        <h2>{this.state.firstWord}</h2>
                    </div>
                    <div className="col_02">
                        <h2>{this.state.secondWord}</h2>
                    </div>
                </div>
                
                <div className="refresh-button">
                    <button onClick={this.onClick}>NEW NAME</button>
                </div>            
            </div>
        )
    }

}

export default App;