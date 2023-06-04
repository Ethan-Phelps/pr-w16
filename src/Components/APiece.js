import React from "react";
import { source } from "./Mockapi";
import Unicode from "./Unicode";
import MoveCard from "./MoveCard";

export default class APiece extends React.Component {
    constructor(props){
        super(props)
        this.state={
            uni: props.unicode,
            nam: props.name,
            mov: props.movement,
            gri: props.grid,
            id: props.id,
            click: props.click
        }
    }
    async demote(){
        await source.putd(this.state.id);
        this.state.click();
    }
    render(){
        return (
            <div className="PRow">
                <Unicode U={this.state.uni}/>
                <MoveCard G={this.state.gri} I={this.state.id}/>
                <button className="PDem" onClick={() => this.demote()}>Demote</button>
                <br/>
                <div className="PNam">{this.state.nam}</div>
                <br/><br/><br/>
                <div className="PMov">{this.state.mov}</div>
            </div>
        );
    }
}