import React from "react";
import { source } from "./Mockapi";
import { Button, Form } from "react-bootstrap";
import EditCard from "./EditCard";

export default class NewPiece extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click: props.click
        }
    }
    onTrigger = async (event) => {
        event.preventDefault();
        await source.post({name:event.target.FNam.value,unicode:event.target.FUni.value,movement:event.target.FMov.value,grid:event.target.FGri.value});
        alert("New piece added to Undecided category");
        location.reload();
    }
    render(){
        return (
            <Form id="FFor" onSubmit = {this.onTrigger}>
                <Form.Group controlId="FNam">
                    <Form.Label>Piece Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">enter the name of the new piece</Form.Text>
                </Form.Group>
                <Form.Group controlId="FUni">
                    <Form.Label>Unicode Icon</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">enter the hexidecimal value of a unicode character</Form.Text>
                </Form.Group>
                <Form.Group controlId="FMov">
                    <Form.Label>Piece Movement</Form.Label>
                    <Form.Control  as="textarea" rows={3} placeholder="" />
                    <Form.Text className="text-muted">describe how the piece is meant to move</Form.Text>
                </Form.Group>
                <Form.Group controlId="FGri">
                    <Form.Label>Piece Movement Also</Form.Label>
                    <div className="FGri">
                        <EditCard I={0}/>
                    </div>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">click the buttons and depict how the piece is meant to move, then type the corresponding string of 81 numbers into the blank</Form.Text>
                </Form.Group>
                <Button variant="light" type="submit">Submit</Button>
            </Form>
        );
    }
}