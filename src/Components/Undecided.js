import React from "react";
import { source } from "./Mockapi";
import UPiece from './UPiece';

export default class Undecided extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Upieces:[],
        }
    }
    async componentDidMount(){
        this.display();
    }
    async display(){
        let Upieces=[];
        const pieces = await source.getu();
        for(let i=0;i<pieces.length;i++){
            Upieces.push(<UPiece key={pieces[i].id} {...pieces[i]} click={() => this.display()}/>);
        }
        this.setState({Upieces});
    }
    render(){
        return (
            <div id="PCon2">
                {this.state.Upieces}
            </div>
        );
    }
}