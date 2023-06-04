import React from "react";
import { source } from "./Mockapi";
import APiece from './APiece';

export default class Accepted extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Apieces:[],
        }
    }
    async componentDidMount(){
        this.display();
    }
    async display(){
        let Apieces=[];
        const pieces = await source.geta();
        for(let i=0;i<pieces.length;i++){
            Apieces.push(<APiece key={pieces[i].id} {...pieces[i]} click={() => this.display()}/>);
        }
        this.setState({Apieces});
    }
    render(){
        return (
            <div id="PCon1">
                {this.state.Apieces}
            </div>
        );
    }
}