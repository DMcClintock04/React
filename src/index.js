import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import ShoppingList from "./ShoppingList";


class Game extends React.Component{
    render(){
        return(
            <div className = "game"> 
            <div>
                <Board/>
            </div>
            </div>
        );
    }
}

class Board extends React.Component{
   renderSquare(i){
    return <Square/>
   }
   
    render(){
        const status = 'X'
        return(
            <div className = "Board">
                <div> Next Player: {status}</div>
                <div className = "firstRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "secondRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "thirdRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component{
    render(){
        return(
            <button className = "square">
                {""}
            </button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);
