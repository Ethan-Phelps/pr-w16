import React from "react";

export default class MoveCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            G: props.G,
            I: props.I,
        }
    }
    async componentDidMount(){
        for(let i=0;i<81;i++){
            if(this.state.G[i]!="0"){
                if(this.state.G[i]=="1"){document.getElementById(this.state.I+"C"+i).style.backgroundColor="#55a";
                }else if(this.state.G[i]=="2"){document.getElementById(this.state.I+"C"+i).style.backgroundColor="#a55";
                }else if(this.state.G[i]=="3"){document.getElementById(this.state.I+"C"+i).style.backgroundColor="#5a5";
                }else if(this.state.G[i]=="4"){document.getElementById(this.state.I+"C"+i).style.backgroundColor="#555";
                }else if(this.state.G[i]=="5"){document.getElementById(this.state.I+"C"+i).style.backgroundColor="#aaa";}
            }
        }
    }
    render(){
        return (
            <div className="PGri">
                <table className="PTab">
                <tbody>
                    <tr><td id={this.state.I+"C0"}></td>
                    <td id={this.state.I+"C1"}></td>
                    <td id={this.state.I+"C2"}></td>
                    <td id={this.state.I+"C3"}></td>
                    <td id={this.state.I+"C4"}></td>
                    <td id={this.state.I+"C5"}></td>
                    <td id={this.state.I+"C6"}></td>
                    <td id={this.state.I+"C7"}></td>
                    <td id={this.state.I+"C8"}></td></tr>
                    <tr><td id={this.state.I+"C9"}></td>
                    <td id={this.state.I+"C10"}></td>
                    <td id={this.state.I+"C11"}></td>
                    <td id={this.state.I+"C12"}></td>
                    <td id={this.state.I+"C13"}></td>
                    <td id={this.state.I+"C14"}></td>
                    <td id={this.state.I+"C15"}></td>
                    <td id={this.state.I+"C16"}></td>
                    <td id={this.state.I+"C17"}></td></tr>
                    <tr><td id={this.state.I+"C18"}></td>
                    <td id={this.state.I+"C19"}></td>
                    <td id={this.state.I+"C20"}></td>
                    <td id={this.state.I+"C21"}></td>
                    <td id={this.state.I+"C22"}></td>
                    <td id={this.state.I+"C23"}></td>
                    <td id={this.state.I+"C24"}></td>
                    <td id={this.state.I+"C25"}></td>
                    <td id={this.state.I+"C26"}></td></tr>
                    <tr><td id={this.state.I+"C27"}></td>
                    <td id={this.state.I+"C28"}></td>
                    <td id={this.state.I+"C29"}></td>
                    <td id={this.state.I+"C30"}></td>
                    <td id={this.state.I+"C31"}></td>
                    <td id={this.state.I+"C32"}></td>
                    <td id={this.state.I+"C33"}></td>
                    <td id={this.state.I+"C34"}></td>
                    <td id={this.state.I+"C35"}></td></tr>
                    <tr><td id={this.state.I+"C36"}></td>
                    <td id={this.state.I+"C37"}></td>
                    <td id={this.state.I+"C38"}></td>
                    <td id={this.state.I+"C39"}></td>
                    <td id={this.state.I+"C40"}></td>
                    <td id={this.state.I+"C41"}></td>
                    <td id={this.state.I+"C42"}></td>
                    <td id={this.state.I+"C43"}></td>
                    <td id={this.state.I+"C44"}></td></tr>
                    <tr><td id={this.state.I+"C45"}></td>
                    <td id={this.state.I+"C46"}></td>
                    <td id={this.state.I+"C47"}></td>
                    <td id={this.state.I+"C48"}></td>
                    <td id={this.state.I+"C49"}></td>
                    <td id={this.state.I+"C50"}></td>
                    <td id={this.state.I+"C51"}></td>
                    <td id={this.state.I+"C52"}></td>
                    <td id={this.state.I+"C53"}></td></tr>
                    <tr><td id={this.state.I+"C54"}></td>
                    <td id={this.state.I+"C55"}></td>
                    <td id={this.state.I+"C56"}></td>
                    <td id={this.state.I+"C57"}></td>
                    <td id={this.state.I+"C58"}></td>
                    <td id={this.state.I+"C59"}></td>
                    <td id={this.state.I+"C60"}></td>
                    <td id={this.state.I+"C61"}></td>
                    <td id={this.state.I+"C62"}></td></tr>
                    <tr><td id={this.state.I+"C63"}></td>
                    <td id={this.state.I+"C64"}></td>
                    <td id={this.state.I+"C65"}></td>
                    <td id={this.state.I+"C66"}></td>
                    <td id={this.state.I+"C67"}></td>
                    <td id={this.state.I+"C68"}></td>
                    <td id={this.state.I+"C69"}></td>
                    <td id={this.state.I+"C70"}></td>
                    <td id={this.state.I+"C71"}></td></tr>
                    <tr><td id={this.state.I+"C72"}></td>
                    <td id={this.state.I+"C73"}></td>
                    <td id={this.state.I+"C74"}></td>
                    <td id={this.state.I+"C75"}></td>
                    <td id={this.state.I+"C76"}></td>
                    <td id={this.state.I+"C77"}></td>
                    <td id={this.state.I+"C78"}></td>
                    <td id={this.state.I+"C79"}></td>
                    <td id={this.state.I+"C80"}></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}