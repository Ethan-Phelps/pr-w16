import React from "react";
import { source } from "./Mockapi";
import Unicode from "./Unicode";
import MoveCard from "./MoveCard";
import { Modal } from "react-bootstrap";
import EditCard from "./EditCard";

export default class UPiece extends React.Component {
    constructor(props){
        super(props)
        this.state={
            uni: props.unicode,
            nam: props.name,
            mov: props.movement,
            gri: props.grid,
            id: props.id,
            click: props.click,
            isOpen: false,
            /* grid: "", */
        }
    }
    async promote(){
        await source.putp(this.state.id);
        this.state.click();
    }
    async delete(){
        await source.del(this.state.id);
        this.state.click();
    }
    onTrigger = async (event) => {
        event.preventDefault();
        await source.edit({id:this.state.id,name:event.target.fnam.value,unicode:event.target.funi.value,movement:event.target.fmov.value,grid:event.target.fgrie.value});
        this.closeModal();
        location.reload();
    }
/*     handleChangeValue = event => this.setState({grid: event.target.value}); */
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    render(){
        return (
            <div>
                <Modal className="PMod" show={this.state.isOpen} dialogClassName="PMod">
                    <form className="PRow" onSubmit = {this.onTrigger}>
                        <input className="PUniE" type="text" id="funi" name="funi" defaultValue={this.state.uni}></input>
                        <EditCard G={this.state.gri} I={this.state.id}/*  grid={this.state.grid} onChangeValue={this.handleChangeValue} *//>
                        <button className="PDel" type="button" onClick={this.closeModal}>Cancel</button>
                        <button className="PEdi" type="submit">Save</button>
                        <br/>
                        <input className="PNamE" type="text" id="fnam" name="fnam" defaultValue={this.state.nam}></input>
                        <br/><br/><br/>
                        <textarea className="PMovE" type="text" id="fmov" name="fmov" defaultValue={this.state.mov}></textarea>
                        <br/>
                        <input className="PGriE" type="text" id="fgrie" name="fgrie" defaultValue={this.state.gri}></input>
                    </form>
                </Modal>
                <div className="PRow">
                    <Unicode U={this.state.uni}/>
                    <MoveCard G={this.state.gri} I={this.state.id}/>
                    <button className="PDel" onClick={() => this.delete()}>Delete</button>
                    <button className="PEdi" onClick={this.openModal}>Edit</button>
                    <button className="PPro" onClick={() => this.promote()}>Promote</button>
                    <br/>
                    <div className="PNam">{this.state.nam}</div>
                    <br/><br/><br/>
                    <div className="PMov">{this.state.mov}</div>
                </div>
            </div>
        );
    }
}