import "../SASS/styles.css";
import React from "react";




// console.log(data);


class App extends React.Component {
    state = {firstWord: '', secondWord: ''};
    firstWordArr = [];
    secondWordArr = ['studio','agency','creative','design'];


    generateName(word){

    };

    render() {
        return (
            <div className="container">
                <div className="col_01">
                    <h2>{this.state.firstWord}</h2>
                </div>
                <div className="col_02">
                    <h2>{this.state.secondWord}</h2>
                </div>
            </div>
        )
    }

}

export default App;