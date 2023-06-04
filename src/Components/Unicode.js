import React from "react";

export default class Unicode extends React.Component {
    constructor(props){
        super(props)
        this.state={
            uni: props.U||"26a0",
        }
    }
    render(){
        return (
            <div className="PUni">
                {String.fromCodePoint(parseInt(this.state.uni,16))}
            </div>
        );
    }
}