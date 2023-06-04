import React from "react";

export default class EditCard extends React.Component {
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
                if(this.state.G[i]=="1"){document.getElementById(this.state.I+"E"+i).style.backgroundColor="darkblue";
                }else if(this.state.G[i]=="2"){document.getElementById(this.state.I+"E"+i).style.backgroundColor="darkred";
                }else if(this.state.G[i]=="3"){document.getElementById(this.state.I+"E"+i).style.backgroundColor="darkgreen";
                }else if(this.state.G[i]=="4"){document.getElementById(this.state.I+"E"+i).style.backgroundColor="dimgray";
                }else if(this.state.G[i]=="5"){document.getElementById(this.state.I+"E"+i).style.backgroundColor="lightgrey";}
            }
        }
    }
    cycle(e){
        if(e.currentTarget.style.backgroundColor=="grey"){e.target.style.backgroundColor="darkblue";
        }else if(e.currentTarget.style.backgroundColor=="darkblue"){e.target.style.backgroundColor="darkred";
        }else if(e.currentTarget.style.backgroundColor=="darkred"){e.target.style.backgroundColor="darkgreen";
        }else if(e.currentTarget.style.backgroundColor=="darkgreen"){e.target.style.backgroundColor="grey";
        }else if(e.currentTarget.style.backgroundColor=="dimgray"){e.target.style.backgroundColor="lightgrey";
        }else if(e.currentTarget.style.backgroundColor=="lightgrey"){e.target.style.backgroundColor="dimgray";
        }
    }
    render(){
        return (
            <div className="PGri">
                <table className="PTabE">
                    <tbody /* grid={this.props.grid} onChange={this.props.onChangeValue} */>
                    <tr><td><button type="button" id={this.state.I+"E0"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E1"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E2"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E3"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E4"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E5"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E6"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E7"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E8"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E9"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E10"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E11"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E12"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E13"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E14"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E15"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E16"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E17"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E18"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E19"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E20"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E21"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E22"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E23"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E24"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E25"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E26"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E27"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E28"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E29"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E30"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E31"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E32"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E33"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E34"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E35"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E36"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E37"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E38"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E39"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E40"} onClick={this.cycle} style={{background: "dimgray"}}></button></td>
                    <td><button type="button" id={this.state.I+"E41"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E42"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E43"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E44"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E45"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E46"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E47"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E48"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E49"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E50"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E51"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E52"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E53"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E54"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E55"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E56"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E57"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E58"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E59"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E60"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E61"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E62"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E63"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E64"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E65"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E66"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E67"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E68"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E69"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E70"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E71"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    <tr><td><button type="button" id={this.state.I+"E72"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E73"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E74"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E75"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E76"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E77"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E78"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E79"} onClick={this.cycle} style={{background: "grey"}}></button></td>
                    <td><button type="button" id={this.state.I+"E80"} onClick={this.cycle} style={{background: "grey"}}></button></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}