import React from "react";
import { Dropdown } from "react-bootstrap";

export default class Legend extends React.Component {
    render(){
        return (
            <Dropdown autoClose="outside">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">?</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><b>Piece Movement Legend</b></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><span style={{color: "#555"}}>&#x2589;</span> : piece origin</Dropdown.Item>
                <Dropdown.Item><span style={{color: "#55a"}}>&#x2589;</span> : typical movement</Dropdown.Item>
                <Dropdown.Item><span style={{color: "#a55"}}>&#x2589;</span> : attacking only</Dropdown.Item>
                <Dropdown.Item><span style={{color: "#5a5"}}>&#x2589;</span> : movement only</Dropdown.Item>
                <Dropdown.Item><span style={{color: "#aaa"}}>&#x2589;</span> : uncertain or dependant movement</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        );
    }
}