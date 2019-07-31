import "../SASS/styles.css";
import React from "react";




// console.log(data);


class App extends React.Component {
    state = {firstWord: '', secondWord: ''};
    firstWordArr = ['lizard','cool','dog','wowwww'];
    secondWordArr = ['studio','agency','creative','design'];


    componentDidMount(){
        this.setState({
            firstWord: this.firstWordArr[Math.floor(Math.random() * this.firstWordArr.length)],
            secondWord: this.secondWordArr[Math.floor(Math.random() * this.secondWordArr.length)],
        })
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